import React from "react"

function App() {
  return (
    <div className="w-screen h-fill lg:h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      <div className="flex justify-center w-screen h-screen mt-32 mb-40">
        <div className="flex flex-col lg:flex-row lg:space-x-72 justify-between items-center">
          <div>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              className="w-52" />
              <div className="ml-6">
                <p className="text-4xl text-gray-800">Recent logins</p>
                <p className="mt-2 text-lg text-gray-600">Click your picture or add an account.</p>
                <div className="flex space-x-4">
                  <div className="mt-4 w-48 bg-white rounded-lg hover:shadow-lg">
                    <div className="w-48 h-48 rounded-t-lg bg-cover bg-[url('https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/67315925_178113963207300_982313863032602624_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=aaDqpEZL77oAX_16hsg&_nc_ht=scontent-los2-1.xx&oh=00_AT-2MYo9byRcZuaatTDp1K6uyJ1a1eJu9WHqQkcJXKZzHA&oe=627F6BCF')]">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-white font-semibold ml-2 hover:px-4 hover:py-2 hover:-ml-4 hover:-mt-3 hover:text-lg
                          hover:bg-white hover:text-gray-800 rounded-full">x</p>
                        </div>
                        <div>
                          <p className="text-white bg-red-600 px-4 py-2 -mr-3 -mt-3 rounded-full text-center">2</p>
                        </div>
                      </div>
                    </div>
                    <p className="p-3 bg-white text-center text-gray-600 font-normal text-xl rounded-b-lg">Victor</p>
                  </div>
                  <div className="flex flex-col mt-4 border-2 border-gray-200 rounded-lg hover:shadow-lg">
                    <div className="w-48 h-48 flex items-center justify-center bg-gray-50 rounded-t-lg">
                      <svg className="w-16 h-16" fill="#1877f2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100
                        2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="p-3 bg-white text-center text-[#1877f2] font-normal text-xl rounded-b-lg">Add Account</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex flex-col space-y-4 items-center bg-white p-8 rounded-2xl shadow">
              <form className="flex flex-col space-y-4">
                <input type="email" placeholder="Email address or phone number" className="w-96 p-4 border-2 rounded-xl
                focus:outline-[#1877f2]" />
                <input type="password" placeholder="Password" className="w-96 p-4 border-2 rounded-xl focus:outline-[#1877f2]" />
                <input type="submit" value="Log In" className="w-96 p-4 bg-[#1877F2] text-white text-xl font-bold
                  rounded-xl hover:cursor-pointer" />
              </form>
              <a href="#" className="text-[#1877F2] font-normal hover:underline">Forgotten password?</a>
              <hr className="w-96 border" />
              <button className="w-64 p-4 bg-[#42b72a] text-white text-xl font-bold rounded-xl">Create New Account</button>
            </div>
            <p className="mt-4"><span><a href="#" className="font-bold hover:underline">Create a Page</a>
            </span> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
      <footer className="bg-white py-2">
        <div className="flex flex-col space-y-4 mx-10">
          <div className="space-x-4 space-y-2">
            <a href="#" className="text-gray-700 text-sm font-medium mt-2">English (UK)</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Hausa</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">French (France)</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Portuguese (Brazil)</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Spanish</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Arabic</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Indonesian</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">German</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Japanese</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Italian</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Hindi</a>
            <button href="#" className="text-gray-700 text-sm font-medium border-2 px-3 hover:bg-gray-100">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd">
                </path>
              </svg>
            </button>
          </div>
          <hr className="border" />
          <div className="space-x-4 space-y-2">
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Sign Up</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Log In</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Messenger</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Facebook Lite</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Watch</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Places</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Games</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Marketplace</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Facebook Pay</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Oculus</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Portal</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Instagram</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Bulletin</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Local</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Fundraisers</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Services</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Voting Information Centre</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Groups</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">About</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Create Ad</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Create Page</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Developers</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Careers</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Privacy</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Cookies</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Terms</a>
            <a href="#" className="text-gray-700 text-sm font-medium hover:underline">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
