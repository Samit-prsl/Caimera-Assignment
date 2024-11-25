import { useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import req from '@/contexts/Requests'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function dialogComponent() {
  const [showModal, setShowModal] = useState(false)
  const [username, setUserName] = useState('')
  const {post} = useContext(req)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    await post('user',{username})
    .then((data)=>{alert('Username submitted')
      setShowModal(false)
      console.log(data);
      
    })
    .catch(()=>alert('Something went Wrong'))    
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <h1 className="mb-8 text-4xl font-bold text-white text-center animate-fade-in-down">
        Competitive Math Quiz
      </h1>
      {/* <MathQuiz userName={userName} /> */}

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to the Math Quiz!</DialogTitle>
            <DialogDescription>
              Please enter your name to get started.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="mb-4"
            />
            <DialogFooter>
              <Button type="submit" disabled={!username.trim()}>
                Start Quiz
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  )
}