import React from 'react'

const About = () => {
  return (
    <section className="container px-6 py-12 mx-auto bg-white mt-5 dark:bg-gray-900 flex-col md:flex-row flex gap-5 w-full justify-between flex-wrap ">
        <div className=" flex flex-col gap-5">
            <div>
                <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-400">I would love to hear from you.</p>
            </div>
            <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Need to Connect</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">bk183040@gmail.com</p>
            </div>
        </div>
        <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 max-w-[600px] lg:h-auto flex-1">
            <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Anishabad,%20Patna+(Shop%20With%20Us.)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
        </div>
    </section>
  )
}

export default About