import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// For client-side data fetching (check docs)
import { useState, useEffect } from 'react'
const inter = Inter({ subsets: ["latin"] });

import React from 'react'
export default function Home() {
  const [result, setResult] = useState("Your answer will be shown here!")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    console.log("Result updated:", result);
    // document.getElementById('result-textfield').value = result;
  }, [result]);


  const askQuestion = () => {
    let apikey = document.getElementById("apikey-field").value
    let prompt = document.getElementById("prompt-field").value
    console.log({
      "apiKey" : apikey,
      "prompt" : prompt
    })
    let temperature = 0.5;
  
  
    console.log("Asked question!!");

    
    callAPI(apikey, prompt, temperature)
  }
  
  const callAPI = async (apikey, prompt, temperature) => {
    try {
      // setLoading(true)
      const res = await fetch(`https://flask-business-books-gpt-api-xsuqww7fzq-ue.a.run.app/answer`, {
        method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          "apikey" : apikey,
          "prompt" : prompt,
          "temperature" : temperature
      })
      });
  
      console.log("Fetched answer!!");
      const data = await res.text();
      console.log(data);
      // setLoading(false)
      setResult(data);
      console.log("should've been updated!!");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
          <div className="font-bold text-2xl flex items-center">
            {/* Logo here, if any */}
            <a className="ml-2 hover:opacity-50" href="https://localhost:3000">
              Business Books GPT
            </a>
          </div>

          <div className="flex items-end justify-end">
            <input
              className="flex items-end justify-end space-x-2 shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-4"
              id="apikey-field"
              type="text"
              placeholder="OpenAPI Key"
            />
            {/* <button className="flex cursor-pointer items-center space-x-2 rounded border border-zinc-600 px-3 py-2 text-sm hover:opacity-50">
              Settings
            </button> */}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center px-3 pt-4 sm:pt-8">
            <div className="text-center font-bold text-3xl mt-7">
              Business Books GPT
            </div>
            <div className="mt-6 text-center text-lg">
              Ask and receive wisdom from the top selling business books of our
              time
            </div>

            <div className="mt-6 text-center text-lg">
              <ul>
                <li>The Intelligent Investor by Benjamin Graham</li>
                <li>The Lean Startup by Eric Ries</li>
                <li>Atomic Habits by James Clear</li>
                <li>Outliers by Malcom Gladwell</li>
                <li>Start with Why by Simon Sinek</li>
                <li>How to Win Friends and Influence People by Dale Carnegie</li>
                <li>Rich Dad and Poor Dad by Robert Kiyosaki</li>
              </ul>
            </div>

            <div className="mt-6 text-center text-lg">
              <input
                className="w-96 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="prompt-field"
                type="text"
                placeholder="Question"
              />
            </div>

            <div className="mt-4">
              <button className="flex cursor-pointer items-center justify-center space-x-2 rounded border border-black bg-black w-40 text-white px-3 py-2 text-sm hover:opacity-50" onClick={askQuestion}>
                Ask Question
              </button>
            </div>

            <div className="mt-4">
              {/* Output here */}
              <textarea name="" id="result-textfield" cols="40" rows="15" className="resize-none select-none bg-slate-300 text-gray-600 rounded p-3" readOnly value={result}/>
            </div>
          </div>
        </div>
        <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
          <div className="hidden sm:flex"></div>
          <div className="hidden sm:flex italic text-sm">
            Created by
            <a
              className="hover:opacity-50 mx-1"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Anagh Kanungo.
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              className="flex items-center hover:opacity-50"
              href="https://github.com/anaghkanungo7/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );

  
}

