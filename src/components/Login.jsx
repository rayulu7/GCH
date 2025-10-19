import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { findUserByEmail, updateUserLoginTime, createUser } from '../utils/userStorage';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user = findUserByEmail(formData.email);
      
      if (!user) {
        setErrors({ general: 'No account found with this email address.' });
        return;
      }

      if (user.password !== formData.password) {
        setErrors({ general: 'Invalid password. Please try again.' });
        return;
      }

      const updatedUser = updateUserLoginTime(user.id);
      
      const { password, ...userData } = updatedUser;
      
      login(userData);
      navigate('/');
    } catch (error) {
      setErrors({ general: 'Invalid email or password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      
      const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
      if (!clientId || clientId === 'your-google-client-id') {
        
        await handleGoogleDemo();
        return;
      }

      if (!window.google) {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleGoogleCallback
        });

        window.google.accounts.id.prompt();
      } else {
        throw new Error('Google API failed to load');
      }
    } catch (error) {
      setErrors({ general: 'Google login failed. Please try again.' });
      setIsLoading(false);
    }
  };

  const handleGoogleDemo = async () => {
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const googleUser = {
      id: 'demo-google-' + Date.now(),
      name: 'Demo Google User',
      email: 'demo@gmail.com',
      phone: '+1234567890',
      loginTime: new Date().toISOString(),
      provider: 'google',
      picture: 'https://via.placeholder.com/150'
    };

    const existingUser = findUserByEmail(googleUser.email);
    if (!existingUser) {
      createUser({
        name: googleUser.name,
        email: googleUser.email,
        phone: googleUser.phone,
        password: 'google_oauth'
      });
    }

    login(googleUser);
    navigate('/');
    setIsLoading(false);
  };

  const handleGoogleCallback = async (response) => {
    try {
      
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      const googleUser = {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        phone: payload.phone_number || '+1234567890',
        loginTime: new Date().toISOString(),
        provider: 'google',
        picture: payload.picture
      };

      const existingUser = findUserByEmail(googleUser.email);
      if (!existingUser) {
        createUser({
          name: googleUser.name,
          email: googleUser.email,
          phone: googleUser.phone,
          password: 'google_oauth'
        });
      }

      login(googleUser);
      navigate('/');
    } catch (error) {
      setErrors({ general: 'Google authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setIsLoading(true);
    try {
      
      const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
      if (!appId || appId === 'your-facebook-app-id') {
        
        await handleFacebookDemo();
        return;
      }

      if (!window.FB) {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = () => {
            window.FB.init({
              appId: appId,
              cookie: true,
              xfbml: true,
              version: 'v18.0'
            });
            resolve();
          };
        });
      }

      window.FB.login((response) => {
        if (response.authResponse) {
          handleFacebookCallback(response);
        } else {
          setErrors({ general: 'Facebook login was cancelled or failed.' });
          setIsLoading(false);
        }
      }, { scope: 'email,public_profile' });

    } catch (error) {
      setErrors({ general: 'Facebook login failed. Please try again.' });
      setIsLoading(false);
    }
  };

  const handleFacebookDemo = async () => {
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const facebookUser = {
      id: 'demo-facebook-' + Date.now(),
      name: 'Demo Facebook User',
      email: 'demo@facebook.com',
      phone: '+1234567890',
      loginTime: new Date().toISOString(),
      provider: 'facebook',
      picture: 'https://via.placeholder.com/150'
    };

    const existingUser = findUserByEmail(facebookUser.email);
    if (!existingUser) {
      createUser({
        name: facebookUser.name,
        email: facebookUser.email,
        phone: facebookUser.phone,
        password: 'facebook_oauth'
      });
    }

    login(facebookUser);
    navigate('/');
    setIsLoading(false);
  };

  const handleFacebookCallback = async (response) => {
    try {
      
      window.FB.api('/me', { fields: 'id,name,email,picture' }, (userInfo) => {
        const facebookUser = {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          phone: '+1234567890',
          loginTime: new Date().toISOString(),
          provider: 'facebook',
          picture: userInfo.picture?.data?.url
        };

        const existingUser = findUserByEmail(facebookUser.email);
        if (!existingUser) {
          createUser({
            name: facebookUser.name,
            email: facebookUser.email,
            phone: facebookUser.phone,
            password: 'facebook_oauth'
          });
        }

        login(facebookUser);
        navigate('/');
      });
    } catch (error) {
      setErrors({ general: 'Facebook authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please sign in to continue.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-green-600 hover:text-green-500 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {errors.general}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-green-600 hover:text-green-500 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-green-50 via-white to-blue-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button
                type="button"
                onClick={handleFacebookLogin}
                disabled={isLoading}
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
