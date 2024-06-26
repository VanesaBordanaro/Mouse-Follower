import { useEffect, useState } from 'react'

function App() {
  const [enabled, setUnabled] = useState(false)
  const [position, setPosition] = useState ({x:0, y:0})

  useEffect(() => {

    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove )
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } 
  },[enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
    })

    useEffect(() => {
      if(!enabled) {
        setPosition({x: 0, y: 0})
      }
    }, [enabled])


  return (
    <>
      <main>
        {enabled && (
          <div style={{
          position: 'absolute',
          backgroundColor:'rgba(0,0,0,0.5)',
          border: '1px solid #fff',
          borderRadius:'50%',
          opacity:0.8,
          pointerEvents:'none',
          left:-20,
          top:-20,
          width:40,
          height:40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}>
        </div>
        )}

        <button onClick={() => setUnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
      </main>
      
    </>
  )
}

export default App
