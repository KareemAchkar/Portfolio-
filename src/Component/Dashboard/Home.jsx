import { useRef } from 'react'
import { auth, storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

export const Home = () => {
  const form = useRef()

  const submitPortfolio = async (e) => {
    e.preventDefault()
    const name = form.current.querySelector('[name="name"]').value
    const description = form.current.querySelector('[name="description"]').value
    const url = form.current.querySelector('[name="url"]').value
    const image = form.current.querySelector('[name="image"]').files[0]

    if (!name || !description || !url || !image) {
      alert('Please fill in all fields')
      return
    }

    const storageRef = ref(storage, `portfolio/${image.name}`)

    try {
      // Upload the image to storage
      const snapshot = await uploadBytes(storageRef, image)

      // Get the download URL of the uploaded image
      const downloadUrl = await getDownloadURL(snapshot.ref)

      // Save the portfolio data to Firestore
      await savePortfolio({
        name,
        description,
        url,
        image: downloadUrl,
      })

      // Refresh the page after a successful submission
      window.location.reload()
    } catch (error) {
      console.error('Error adding portfolio:', error)
    }
  }

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      console.log('Portfolio added successfully')
      window.location.reload(false)
    } catch (error) {
      console.error('Error adding portfolio:', error)
      alert('Failed to add portfolio: ' + error.message) // Display the error message in an alert
    }
  }

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" name="name" placeholder="Name" />
        </p>
        <p>
          <textarea type="text" name="description" placeholder="Description" />
        </p>
        <p>
          <input type="text" name="url" placeholder="Url" />
        </p>
        <p>
          <input type="file" name="image" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </form>
    </div>
  )
}
