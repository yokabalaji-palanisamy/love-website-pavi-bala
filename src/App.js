import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [hearts, setHearts] = useState([])

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prevHearts => [...prevHearts, toggle ? '🖤' : '💙'])
      setToggle(prev => !prev)
    }, 600)

    return () => clearInterval(interval)
  }, [toggle])

  const img = [
    { img: '1 (1).jpg', alt: 'img' },
    { img: '1 (2).jpg', alt: 'img' },
    { img: '1 (3).jpg', alt: 'img' },
    { img: '1 (4).jpg', alt: 'img' },
    { img: '1 (5).jpg', alt: 'img' },
    { img: '1 (6).jpg', alt: 'img' },
    { img: '1 (7).jpg', alt: 'img' },

    { img: '1 (8).jpg', alt: 'img' }
  ]

  
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='content relative'>
        {/* Add Image */}
        <img
          src={require('../src/img/1 (20).jpg')}
          alt='Love'
          className='love-image h-40 w-40 ms-auto me-auto mt-10 rounded-full'
        />

        {/* <h1 className='message text-center my-2 text-red-600 text-5xl font-bold'>
          Sorry!
        </h1> */}

        <div className=' my-3'>
          <h1 className='flex items-center justify-center text-5xl font-extrabold text-center'>
            Sorry
            <span className='bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2'>
              Pavi
            </span>
          </h1>
        </div>

        <div className='hearts-container flex justify-center items-center flex-wrap'>
          {hearts.map((heart, index) => (
            <span
              key={index}
              className='heart ms-auto me-auto'
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        <div className='  flex justify-center items-center flex-wrap'>
          {img.map((h, i) => (
            <img
              src={require(`../src/img/${h.img}`)}
              alt={h.alt}
              key={i}
              className='images_flot ms-auto me-auto'
              style={{ animationDelay: `${i * 0.9}s` }}
            />
          ))}
        </div>

        <div>
          <blockquote className='text-xl italic font-semibold text-gray-900 p-20'>
            <svg
              class='w-8 h-8 text-gray-400 dark:text-gray-600 mb-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 14'
            >
              <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
            </svg>
            <p className=' text-justify'>
              "Kavinan endra perukea artham teriyatha enai kavinan akiya unaku
              en kadhal unara unakaga eluthum intha kavithai en kadhalai
              unarthum ena nambukiren nee enakul en evola alamaga nolaintha
              endru enakul nanea pala murai kettulen athu en endru enal ariya
              mudiyavillai, en valkail irulil naan siki kondu thavikum anta
              natkalil enaku velichathai koduthai ennulea enaku nambi kuduthai
              anal Naa unai nenaitha anta tharunathil irunthu neethan en
              thunaive endru naan unarthen andru... andrilirunthu indru varai en
              manamum en aadhmavim enathu uyireum anaithum un idathil
              adaimaiyaga maarivitathu...{' '}
              <strong className='font-semibold text-gray-900'>💙</strong> namba
              nandraga pesiya naatkalil Naan unara villai nee enakul evolav
              alama... Pathithai endru nee naam sandaita natkalil ovoru muraium
              en kadhalin aalam athigamanathu... Unakaga endrendrum valum en
              uyire, unakagavea endrendrum thudikum en ithaiyathai nee yaaano
              athai Kaya paduthu vilaiyadukirai athu unakaga ondru enpathai athu
              unarthaa en manamum en ithaiyamum poradukirathu... Enidam ena
              thavaru Kandai enaku puriya villai athai Kanda neethan enidam
              unartha vendum atha Nan thiruthavim seiven ... Ennidam irukum
              kadhalai ennal unaku varthaiyai Sola mudiyavelai aanendral
              atharkana varthai intha ulagal inum uruvaga velai enbathea
              unmai...{' '}
              <strong className='font-semibold text-gray-900'>💙</strong> Nee
              ennidam sandai edum pothu un ithalkalai pol un kannkalukum poi
              solla katrukudaka maranthuvitai nee enidam sandaittu pesum pothu
              un ithalil varum varthaiyai Naan ketavillai un kannil solum
              unmaiyai arithen paavam athu mattumea enidathul nee sandai idum
              pothu unmaiyai solum ... Enidam unmai pesum anta kanukalku enal
              mudintha varnipai kodukiren , poovin mootukal pol iruntu kankal
              athil athilum enai kavartha anta Kanda vilikal un idathil anta
              kadhalai vilaikiya anta kankaluku endrendrum adaimaiyagirran...
              Pirunthu selvathu kadhalin mudiv illa sernthu valvathea kadhalin
              nokam agum aaram aaram inalkalum,kastagalum nam kadhalku vantalum
              anaithum kadanthu nam unmai kadhaalai puriyathavarkalku puriya
              vaipom va... By, un anbirkaga aagum un uyire "
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default App
