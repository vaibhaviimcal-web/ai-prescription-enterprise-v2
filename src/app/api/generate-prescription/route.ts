import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-key'
})

export async function POST(request: NextRequest) {
  try {
    const { patientName, age, symptoms, aiProvider } = await request.json()

    // For demo purposes, we'll use a mock response
    // In production, this would call the actual AI API
    const mockPrescription = await generateMockPrescription(symptoms, age)

    return NextResponse.json({
      success: true,
      patientName,
      age,
      aiProvider,
      diagnosis: mockPrescription.diagnosis,
      medicines: mockPrescription.medicines,
      generatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error generating prescription:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate prescription' },
      { status: 500 }
    )
  }
}

async function generateMockPrescription(symptoms: string, age: string) {
  const lower = symptoms.toLowerCase()
  const medicines = []

  // Smart symptom analysis
  if (lower.includes('fever') || lower.includes('temperature')) {
    medicines.push({
      name: 'Paracetamol 500mg',
      dosage: '1 tablet twice daily after meals for 3 days'
    })
  }

  if (lower.includes('cough') || lower.includes('cold')) {
    medicines.push({
      name: 'Cetirizine 10mg',
      dosage: '1 tablet at bedtime for 5 days'
    })
    medicines.push({
      name: 'Cough Syrup (Benadryl)',
      dosage: '2 teaspoons thrice daily for 5 days'
    })
  }

  if (lower.includes('headache') || lower.includes('pain')) {
    medicines.push({
      name: 'Ibuprofen 400mg',
      dosage: '1 tablet when needed (maximum 3 per day)'
    })
  }

  if (lower.includes('stomach') || lower.includes('acidity') || lower.includes('gastric')) {
    medicines.push({
      name: 'Pantoprazole 40mg',
      dosage: '1 tablet before breakfast for 7 days'
    })
  }

  if (lower.includes('throat') || lower.includes('sore')) {
    medicines.push({
      name: 'Strepsils Lozenges',
      dosage: '1 lozenge every 3-4 hours as needed'
    })
  }

  // Default medicines if no specific symptoms matched
  if (medicines.length === 0) {
    medicines.push({
      name: 'Multivitamin Tablet',
      dosage: '1 tablet daily after breakfast'
    })
  }

  // Add general advice
  medicines.push({
    name: 'General Advice',
    dosage: 'Adequate rest, drink plenty of water (8-10 glasses/day), avoid cold beverages'
  })

  return {
    diagnosis: symptoms,
    medicines
  }
}

// Real AI integration (commented out for demo)
/*
async function generateAIPrescription(symptoms: string, age: string, provider: string) {
  if (provider === 'openai') {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert medical AI assistant. Generate a prescription based on symptoms. Include medicine names, dosages, and duration."
        },
        {
          role: "user",
          content: `Patient age: ${age}, Symptoms: ${symptoms}. Generate a detailed prescription.`
        }
      ]
    })
    
    return completion.choices[0].message.content
  }
  
  // Add Gemini and Claude integrations here
}
*/