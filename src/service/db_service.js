import firebase from 'firebase';
import firebaseApp from './firebase'

class DBService{
	// constructor() {
	// 	this.database = firebaseApp.database();
	// }

	dbUpdate(user){
		// this.database.ref('users/' + user.uid).set({
		firebaseApp.database().ref('/users/' + user.uid).set({
			uid: user.uid,
			name: user.name,
			// email: user.email,
			// position: user.position,
			// company: user.company,
			// message: user.message,
			// profile: user.profile,
			// theme: user.theme
		  });
	}
}

export default DBService;