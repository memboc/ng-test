import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class FirebaseProvider {
  public tasks: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.auth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.db.object('users/' + auth.uid);
        }
      });

    this.tasks = this.db.list('tasks');
    this.users = this.db.list('users');
  }

  /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<any>}
   */
  loginWithEmail(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<any>}
   */
  loginWithGoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<any>}
   */
  loginAnon() {
    return this.auth.auth.signInAnonymously();
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.auth.auth.signOut();
  }

  /**
   *
   * @returns {firebase.Promise<void>}
   * @param email
   * @param password
   */
  registerUser(email, password) {
    console.log(email);
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   *
   * @param uid
   * @param name
   * @param email
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.db.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

  /**
   *
   */
  addUserInfo(){
    //We saved their auth info now save the rest to the db.
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

  /**
   * @param path
   * @param callback
   */
  public getDataSubsctibe(path, callback) {
    let list = this.db.list(path);
    list.$ref.on('child_added', (snapshot: DataSnapshot) => {
      callback(snapshot.val())
    });
  }

  /**
   * @param path
   * @returns {Observable<any[]>}
   */
  public getDataList(path) {
    return this.db.list(path);
  }

  /**
   * @param path
   * @param dataObj
   */
  public postData(path, dataObj) {
    this.db.list(path).push(dataObj);
  }

  public delete(path, item) {
    this.db.list(path).remove(item);
  }

}
