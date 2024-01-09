import React, { useState } from "react"
import { Link } from "gatsby"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleGitHubLogin = () => {
    // Redirect users to GitHub for authentication
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user"
  }

  const handleLogin = async () => {
    const space_id = "your_space_id"
    const cma_token = "your_cma_token"

    // URL for the Content Management API
    const url = `https://api.contentful.com/spaces/${space_id}/entries`

    const headers = {
      Authorization: `Bearer ${cma_token}`,
      "Content-Type": "application/json",
    }

    try {
      // Using the fetch function for making the request
      const response = await fetch(url, { headers })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        console.error(`Error: ${response.status}`)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <h1>Inloggning</h1>
      <form>
        <label>
          Användarnamn:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Lösenord:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Logga in
        </button>
      </form>
      <p>
        Har du inget konto? <Link to="/registrera">Registrera här</Link>.
      </p>
      <div>
        <h1>Inloggning</h1>
        <button type="button" onClick={handleGitHubLogin}>
          Logga in med GitHub
        </button>
        <p>
          Har du inget konto? <Link to="/registrera">Registrera här</Link>.
        </p>
      </div>
    </div>
  )
}

export default LoginPage
