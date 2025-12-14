'use client'

import { useState } from 'react'
import { FileText, Users, Brain, BarChart3, Download, Sparkles } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    symptoms: '',
    aiProvider: 'openai'
  })
  const [prescription, setPrescription] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/generate-prescription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      setPrescription(data)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate prescription')
    } finally {
      setLoading(false)
    }
  }

  const downloadPDF = () => {
    // PDF download logic
    alert('PDF download feature - integrate jsPDF here')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Prescription Enterprise</h1>
                <p className="text-sm text-gray-600">Powered by Multi-AI Technology</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-indigo-600">Dashboard</button>
              <button className="px-4 py-2 text-gray-700 hover:text-indigo-600">Patients</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Brain className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">AI-Powered</h3>
            <p className="text-sm text-gray-600">Multi-provider AI integration</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Users className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Patient Management</h3>
            <p className="text-sm text-gray-600">Complete patient records</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <BarChart3 className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Analytics</h3>
            <p className="text-sm text-gray-600">Real-time insights</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Download className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">PDF Export</h3>
            <p className="text-sm text-gray-600">Professional prescriptions</p>
          </div>
        </div>

        {/* Prescription Generator */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Generate Prescription</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={formData.patientName}
                  onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter patient name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter age"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms & Diagnosis
                </label>
                <textarea
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe symptoms in detail..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Provider
                </label>
                <select
                  value={formData.aiProvider}
                  onChange={(e) => setFormData({...formData, aiProvider: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="openai">OpenAI GPT-4</option>
                  <option value="gemini">Google Gemini Pro</option>
                  <option value="claude">Anthropic Claude</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    <span>Generate AI Prescription</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescription Preview</h2>
            
            {!prescription ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Fill the form to generate prescription</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold text-indigo-600">Dr. Kumar Vaibhav</h3>
                  <p className="text-sm text-gray-600">MBBS, MD | Reg. No: 12345</p>
                  <p className="text-sm text-gray-600">AI-Powered Prescription System</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Patient:</span> {prescription.patientName}
                  </div>
                  <div>
                    <span className="font-semibold">Age:</span> {prescription.age} years
                  </div>
                  <div>
                    <span className="font-semibold">Date:</span> {new Date().toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-semibold">AI Provider:</span> {prescription.aiProvider}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Diagnosis:</h4>
                  <p className="text-sm text-gray-700">{prescription.diagnosis}</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Prescription:</h4>
                  <div className="space-y-2">
                    {prescription.medicines?.map((med: any, idx: number) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-600">{med.dosage}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={downloadPDF}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}