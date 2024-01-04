import react, { ReactNode } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Row = ({ children }: { children: ReactNode }) => {
    return <div className='flex gap-1'>{children}</div>
}

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
                <div className='container mx-auto p-4'>
                    <div className='grid grid-cols-1 gap-2'>
                        <Row>
                            <Button variant={'default'}>Button</Button>
                            <Button variant={'outline'}>Button</Button>
                            <Button variant={'destructive'}>Button</Button>
                            <Button variant={'secondary'}>Button</Button>
                            <Button variant={'ghost'}>Button</Button>
                        </Row>
                        <Row>
                            <Input placeholder='Input' />
                        </Row>
                    </div>
                </div>
            </div>
        </main>
    )
}
