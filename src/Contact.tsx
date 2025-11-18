import { Helmet } from 'react-helmet-async'
import { useState, type FormEvent } from 'react'
import Breadcrumb from './Breadcrumb'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitSuccess(false)

    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      })
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | UTRGV AI Agents</title>
        <meta 
          name="description" 
          content="Get in touch with the UTRGV AI Agents team. Learn more about AI agent capabilities or discuss potential applications with our developers." 
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb currentPage="Contact" />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-utrgv-orange-600 via-red-600 to-utrgv-orange-700 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Connect with UTRGV developers about AI agents
            </p>
          </div>
        </section>

         {/* Contact Section */}
         <section aria-labelledby="contact-heading" className="py-20 bg-white dark:bg-gray-900">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Reach Out</h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                 Interested in learning more about AI agent capabilities or want to discuss potential applications? 
                 Our team is here to showcase what's possible with autonomous AI agents.
               </p>
             </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                 <article className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                   <h3 id="contact-info-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                   <address className="space-y-6 not-italic">
                     <div className="flex items-start">
                       <div className="w-12 h-12 bg-utrgv-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                         </svg>
                       </div>
                       <div>
                         <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                         <a href="mailto:contact@utrgv.edu" className="text-gray-600 dark:text-gray-300 hover:text-utrgv-orange-600 dark:hover:text-utrgv-orange-400 transition-colors">
                           contact@utrgv.edu
                         </a>
                       </div>
                     </div>
                     <div className="flex items-start">
                       <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                         </svg>
                       </div>
                       <div>
                         <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                         <a href="tel:+19566650000" className="text-gray-600 dark:text-gray-300 hover:text-utrgv-orange-600 dark:hover:text-utrgv-orange-400 transition-colors">
                           (956) 665-XXXX
                         </a>
                       </div>
                     </div>
                     <div className="flex items-start">
                       <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                         </svg>
                       </div>
                       <div>
                         <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                         <p className="text-gray-600 dark:text-gray-300">
                           University of Texas Rio Grande Valley<br />
                           Edinburg, TX 78539
                         </p>
                       </div>
                     </div>
                   </address>
                 </article>

                 {/* Office Hours */}
                 <article className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                   <h3 id="office-hours-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Office Hours</h3>
                   <dl className="space-y-2">
                     <div className="text-gray-600 dark:text-gray-300">
                       <dt className="font-semibold inline">Monday - Friday:</dt>
                       <dd className="inline ml-2">8:00 AM - 5:00 PM</dd>
                     </div>
                     <div className="text-gray-600 dark:text-gray-300">
                       <dt className="font-semibold inline">Saturday:</dt>
                       <dd className="inline ml-2">9:00 AM - 1:00 PM</dd>
                     </div>
                     <div className="text-gray-600 dark:text-gray-300">
                       <dt className="font-semibold inline">Sunday:</dt>
                       <dd className="inline ml-2">Closed</dd>
                     </div>
                   </dl>
                 </article>
              </div>

               {/* Contact Form */}
               <article className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 id="message-form-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
                 
                 {/* Success Message */}
                 {submitSuccess && (
                   <div 
                     role="alert" 
                     className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-800 dark:text-green-100 rounded-lg"
                   >
                     Message sent successfully! We'll get back to you soon.
                   </div>
                 )}

                 {/* Error Summary */}
                 {Object.keys(errors).length > 0 && (
                   <div 
                     role="alert" 
                     aria-live="assertive"
                     className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-800 dark:text-red-100 rounded-lg"
                   >
                     <p className="font-semibold mb-2">Please fix the following errors:</p>
                     <ul className="list-disc list-inside space-y-1">
                       {Object.entries(errors).map(([field, error]) => (
                         <li key={field}>{error}</li>
                       ))}
                     </ul>
                   </div>
                 )}

                 <form 
                   className="space-y-6" 
                   aria-labelledby="message-form-heading"
                   onSubmit={handleSubmit}
                   noValidate
                 >
                   <div>
                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                       Name <span className="text-red-600" aria-label="required">*</span>
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={(e) => handleChange('name', e.target.value)}
                       className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 focus:border-utrgv-orange-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                       placeholder="Your full name"
                       required
                       aria-required="true"
                       aria-invalid={!!errors.name}
                       aria-describedby={errors.name ? 'name-error' : undefined}
                     />
                     {errors.name && (
                       <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                         {errors.name}
                       </p>
                     )}
                   </div>

                   <div>
                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                       Email <span className="text-red-600" aria-label="required">*</span>
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={(e) => handleChange('email', e.target.value)}
                       className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 focus:border-utrgv-orange-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                       placeholder="your.email@utrgv.edu"
                       required
                       aria-required="true"
                       aria-invalid={!!errors.email}
                       aria-describedby={errors.email ? 'email-error' : undefined}
                     />
                     {errors.email && (
                       <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                         {errors.email}
                       </p>
                     )}
                   </div>

                   <div>
                     <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                       <select
                         id="subject"
                         name="subject"
                         value={formData.subject}
                         onChange={(e) => handleChange('subject', e.target.value)}
                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 focus:border-utrgv-orange-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                         required
                       >
                         <option>General Inquiry</option>
                         <option>AI Agent Demo Request</option>
                         <option>Collaboration Opportunity</option>
                         <option>Technical Questions</option>
                         <option>Other</option>
                       </select>
                   </div>

                   <div>
                     <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                       Message <span className="text-red-600" aria-label="required">*</span>
                     </label>
                     <textarea
                       id="message"
                       name="message"
                       rows={6}
                       value={formData.message}
                       onChange={(e) => handleChange('message', e.target.value)}
                       className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-utrgv-orange-500 focus:border-utrgv-orange-500 transition duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                       placeholder="Tell us how we can help you..."
                       required
                       aria-required="true"
                       aria-invalid={!!errors.message}
                       aria-describedby={errors.message ? 'message-error' : undefined}
                     ></textarea>
                     {errors.message && (
                       <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
                         {errors.message}
                       </p>
                     )}
                   </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-utrgv-orange-600 to-red-600 hover:from-utrgv-orange-700 hover:to-red-700'} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
