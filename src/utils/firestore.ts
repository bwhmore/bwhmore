import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const testFirestoreConnection = async () => {
  try {
    // Try to fetch documents from the contacts collection
    const contactsCollection = collection(db, 'contacts');
    const q = query(contactsCollection);
    const querySnapshot = await getDocs(q);
    
    console.log('Found documents in contacts collection:');
    querySnapshot.forEach((doc) => {
      console.log('Document ID:', doc.id);
      console.log('Document data:', doc.data());
    });
    
    return true;
  } catch (error) {
    console.error('Error testing Firestore connection:', error);
    return false;
  }
};
