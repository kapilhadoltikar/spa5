import { useRef, useState } from 'react'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Laptop from '../assets/Laptop.jpg'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import {
    FaWhatsappSquare,
    FaFacebookSquare,
    FaDiscord,
    FaInstagram,
    FaTelegram
} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'
import ScrollToTop from './ScrollToTop'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const home = useRef(null)
    const login = useRef(null)
    const signin = useRef(null)
    const newsletter = useRef(null)
    const services = useRef(null)
    const aboutcontact = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {/* Navbar */}


            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

                <ScrollToTop />

                <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer'>KVR Bank</h1>

                <ul className='hidden md:flex'>
                    <Link to={'/'} ><li onClick={() => scrollToSection(home)} className='p-4 cursor-pointer'>Home</li></Link>
                    <Link to={'/login'} ><li onClick={() => scrollToSection(login)} className='p-4 cursor-pointer'>Login</li></Link>
                    <Link to={'/signin'} ><li onClick={() => scrollToSection(signin)} className='p-4 cursor-pointer'>Signin</li></Link>
                    <Link to={'/newsletter'} ><li onClick={() => scrollToSection(newsletter)} className='p-4 cursor-pointer'>Newletter</li></Link>
                    <Link to={'/services'} ><li onClick={() => scrollToSection(services)} className='p-4 cursor-pointer'>Services</li></Link>
                    <Link to={'/aboutcontact'} ><li onClick={() => scrollToSection(aboutcontact)} className='p-4 cursor-pointer'>About&Contact</li></Link>
                </ul>


                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className={nav ? 'fixed left-0 top-0 bg-[#191970] w-[60%] h-full border-r border-r-grey-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>

                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>KVR Bank</h1>
                    <ul className='uppercase p-4'>
                        <Link to={'/'} ><li onClick={() => scrollToSection(home)} className='p-4 border-b border-gray-600'>Home</li></Link>
                        <Link to={'/login'} ><li onClick={() => scrollToSection(login)} className='p-4 border-b border-gray-600'>Login</li></Link>
                        <Link to={'/signin'} ><li onClick={() => scrollToSection(signin)} className='p-4 border-b border-gray-600'>Signin</li></Link>
                        <Link to={'/newsletter'} ><li onClick={() => scrollToSection(newsletter)} className='p-4 border-b border-gray-600'>Newletter</li></Link>
                        <Link to={'/services'} ><li onClick={() => scrollToSection(services)} className='p-4 border-b border-gray-600'>Services</li></Link>
                        <Link to={'/aboutcontact'} ><li onClick={() => scrollToSection(aboutcontact)} className='p-4'>About & Contact</li></Link>
                    </ul>

                </div>
            </div>



            {/* Hero */}


            <div ref={home} className='text-white'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold p-2'>SAFEGUARD YOUR WEALTH WITH KVR BANKING</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        Grow with KVR Bank
                    </h1>
                    <div className='flex justify-center items-center md:text-5xl sm:text-4xl text-xl font-bold'>
                        <p className='md:text-5xl sm:text-4xl test-xl font-bold py-4'>
                            Fast, flexible financing for
                        </p>

                        {/* typewriter effect to the text */}
                        <div className='pl-2 md:text-5xl sm:text-4xl test-xl md:pl-4 font-bold'>
                            <Typewriter
                                words={['Home', 'Car', 'Personal', 'Business']}
                                loop={10}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </div>
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>
                        Protect, Manage and Grow your wealth with our bespoke financial solutions.
                    </p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                        Get Started
                    </button>
                </div>
            </div >



            {/* Login */}

            <div ref={login} className="bg-gray-50 dark:bg-black-500">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-4 mt-8 text-center tracking-tight text-[#00df9a]">
                        KVR Bank
                    </a>
                    <div className="w-full bg-white rounded-lg shadow-2xl hover:scale-105 duration-300 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required

                                    />
                                </div>

                                <div className="flex items-start">

                                    <div className="flex items-center h-5">
                                        <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Forget Password?</a>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-black bg-[#00df9a] hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Login
                                </button>

                                <p className="text-sm6 text-center font-light text-black dark:text-gray-400">
                                    Don't have an account? <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Create here!</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* Newsletter */}

            <div ref={newsletter}>
                {/* Analytics */}


                <div className='w-full bg-white py-8 px-4'>
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                        <div className='flex flex-col justify-center'>
                            <p className='text-[#00df9a] font-bold'>
                                DATA ANALYTICS DASHBOARD
                            </p>
                            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                                Manage Wealth by data Analysis.
                            </h1>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content here, content here', making it look
                                like readable English.
                            </p>
                            <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                                Get Started
                            </button>
                        </div>
                    </div>

                </div>


                {/* NewsLetter */}
                <div className='w-full py-10 text-white px-4'>
                    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                        <div className='lg:col-span-2 my-4'>
                            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                                Tips & tricks from experts on Wealth management?
                            </h1>
                            <p>
                                Sign up to our newsletter and stay up to date.
                            </p>
                        </div>
                        <div className='my-4'>
                            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                                <input
                                    className='p-3 flex w-full rounded-md text-black bg-white'
                                    type='email'
                                    placeholder='Enter Email'
                                />
                                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                                    Notify Me
                                </button>
                            </div>
                            <p className=''>
                                Care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Services */}


            <div ref={services} className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>


                    {/* Card One */}

                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img
                            className='w-20 mx-auto mt-[-3rem] bg-white'
                            src={Single}
                            alt=''
                        />
                        <h2 className='text-2xl font-bold text-center py-8'>
                            Savings Account
                        </h2>
                        <p className='text-center text-4xl font-bold'>
                            Free
                        </p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Up to 3.5% interest</p>
                            <p className='py-2 border-b mx-8'>Free transactions 5/mo</p>
                            <p className='py-2 border-b mx-8'>Minimum balance 1000/-</p>
                        </div>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                            Get Started
                        </button>
                    </div>



                    {/* Card Two */}

                    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img
                            className='w-20 mx-auto mt-[-3rem] bg-transparent'
                            src={Double}
                            alt=''
                        />
                        <h2 className='text-2xl font-bold text-center py-8'>
                            Current Account
                        </h2>
                        <p className='text-center text-4xl font-bold'>
                            Free
                        </p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Up to 0% interest</p>
                            <p className='py-2 border-b mx-8'>Free transactions Unlimited</p>
                            <p className='py-2 border-b mx-8'>Minimum balance 15000/-</p>
                        </div>
                        <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                            Get Started
                        </button>
                    </div>



                    {/* Card Three */}

                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img
                            className='w-20 mx-auto mt-[-3rem] bg-white'
                            src={Triple}
                            alt=''
                        />
                        <h2 className='text-2xl font-bold text-center py-8'>
                            Fixed Deposit Account
                        </h2>
                        <p className='text-center text-4xl font-bold'>
                            Free
                        </p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Up to 7% interest</p>
                            <p className='py-2 border-b mx-8'>Free transactions on maturity</p>
                            <p className='py-2 border-b mx-8'>Minimum balance 10000/-</p>
                        </div>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>
                            Get Started
                        </button>
                    </div>


                </div>
            </div>


            {/* Signin */}


            <div ref={signin} className="bg-gray-50 dark:bg-black-500">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-4 mt-8 text-center tracking-tight text-[#00df9a]">
                        KVR Bank
                    </a>
                    <div className="max-w-xl bg-white rounded-lg shadow-2xl hover:scale-105 duration-300 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create new account
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">

                                <div className='flex flex-row space-x-4'>
                                    <div>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter First Name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter Last Name"
                                            required
                                        />
                                    </div>
                                </div>



                                <div className='flex flex-row space-x-4'>
                                    <div>
                                        <input
                                            type="text"
                                            name="pan_number"
                                            id="pan_number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter PAN Number"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="govt_id_number"
                                            id="govt_id_number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter Govt.id Number"
                                            required
                                        />
                                    </div>
                                </div>




                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>


                                <div>
                                    <input
                                        type="confirm-password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="Re-Enter Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="flex items-start">

                                    <div className="flex items-center h-5">
                                        <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Terms & Conditions.</a>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-black bg-[#00df9a] hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create Account
                                </button>

                                <p className="text-sm6 text-center font-light text-black dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Login here!</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* Footer */}

            <div ref={aboutcontact} className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>KVR Bank</h1>
                    <p className='py-4'>
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English.
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaXTwitter size={30} />
                        <FaDiscord size={30} />
                        <FaWhatsappSquare size={30} />
                        <FaTelegram size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>

                    {/* Column One */}
                    <div>
                        <h6 className='font-medium text-gray-400'>
                            Solutions
                        </h6>
                        <ul>
                            <li className='py-2 text-sm'>Analytics</li>
                            <li className='py-2 text-sm'>Marketing</li>
                            <li className='py-2 text-sm'>Commerce</li>
                            <li className='py-2 text-sm'>Insights</li>
                        </ul>
                    </div>


                    {/* Column Two */}
                    <div>
                        <h6 className='font-medium text-gray-400'>
                            Support
                        </h6>
                        <ul>
                            <li className='py-2 text-sm'>Pricing</li>
                            <li className='py-2 text-sm'>Documentation</li>
                            <li className='py-2 text-sm'>Guides</li>
                            <li className='py-2 text-sm'>API Status</li>
                        </ul>
                    </div>


                    {/* Column Three */}
                    <div>
                        <h6 className='font-medium text-gray-400'>
                            Company
                        </h6>
                        <ul>
                            <li className='py-2 text-sm'>About</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Jobs</li>
                            <li className='py-2 text-sm'>Press</li>
                            <li className='py-2 text-sm'>Careers</li>
                        </ul>
                    </div>


                    {/* Column Four */}
                    <div>
                        <h6 className='font-medium text-gray-400'>
                            Legal
                        </h6>
                        <ul>
                            <li className='py-2 text-sm'>Claim</li>
                            <li className='py-2 text-sm'>Policy</li>
                            <li className='py-2 text-sm'>Terms</li>
                        </ul>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Navbar