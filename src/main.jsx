import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <GoogleOAuthProvider clienId="1082615821037-dq2hsd2ij5fnltt2m96vr6jfe3pgpguj.apps.googleusercontent.com">
    <App />
  // {/* </GoogleOAuthProvider> */}
  // </React.StrictMode>,
)
