import React from 'react';
import { FileJson, Code2, Terminal } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-brutal-text dark:text-gray-200 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-black mb-8 border-b-4 border-brutal-border dark:border-gray-700 pb-4 inline-block">
        Developer Portal
      </h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              API Quickstart
            </h2>
            <p className="mb-4 text-lg">
              Welcome to the Nikunj Maheshwari API. This public REST API allows developers and AI agents to programmatically access my portfolio data, projects, and insights. 
              The API is currently open and does not require an API key for general read access.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded border-2 border-gray-700 overflow-x-auto">
              <code>
                <span className="text-green-400"># Fetch all projects in JSON format</span><br />
                curl -X GET https://nikunjmaheshwari.xyz/api/projects<br /><br />
                
                <span className="text-green-400"># Fetch all projects in Markdown format (Content Negotiation)</span><br />
                curl -H "Accept: text/markdown" https://nikunjmaheshwari.xyz/api/projects
              </code>
            </div>
          </div>

          <div className="border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
            <h2 className="text-2xl font-bold mb-4">Error Responses</h2>
            <p className="mb-4 text-lg">
              If a request fails, the API returns a structured JSON error response containing an error code, message, and resolution hint.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded border-2 border-gray-700 overflow-x-auto">
              <code>
{`{
  "error": {
    "code": "not_found",
    "message": "The requested endpoint was not found.",
    "resolution": "Check your spelling, or consult the API documentation."
  }
}`}
              </code>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileJson className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Resources
            </h3>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="/openapi.json" className="text-blue-600 dark:text-blue-400 hover:underline">OpenAPI Specification</a>
              </li>
              <li>
                <a href="/llms.txt" className="text-blue-600 dark:text-blue-400 hover:underline">LLM Agent Instructions</a>
              </li>
              <li>
                <a href="https://github.com/markstone111" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub Repository</a>
              </li>
            </ul>
          </div>

          <div className="border-4 border-brutal-border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              CLI Tool
            </h3>
            <p className="mb-4 font-medium">
              We provide a lightweight CLI tool to quickly query the portfolio API from your terminal.
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded border-2 border-gray-700 text-sm overflow-x-auto">
              <code>npx nikunj projects</code><br/>
              <span className="text-gray-400"># or install globally:</span><br/>
              <code>npm install -g nikunj</code><br/>
              <code>nikunj projects</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
