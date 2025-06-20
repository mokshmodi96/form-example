import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default App;
