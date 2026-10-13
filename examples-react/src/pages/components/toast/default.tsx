import { useState } from "react"
import { Button } from "@/components/button"
import { Title } from "@/components/title"
import { Text } from "@/components/text"
import { Toast, ToastContent } from "@/components/toast"
import { Toaster } from "@/components/toaster"

export function Example() {
    const [toasts, setToasts] = useState<number[]>([])

    const showToast = () => {
        setToasts(current => [...current, Date.now()])
    }

    const closeToast = (toast: number) => {
        setToasts(current => current.filter(item => item !== toast))
    }

    return (
        <>
            <Button onClick={showToast}>Show toast</Button>

            <Toaster className="items-end">
                {toasts.map((toast) => (
                    <Toast key={toast} onClose={() => closeToast(toast)}>
                        {({ close }) => (
                            <ToastContent>
                                <div className="flex-col">
                                    <Title>Hello toast</Title>
                                    <Text>Amazing toast</Text>
                                </div>
                                <Button className="muted ml-auto" onClick={close}>Close</Button>
                            </ToastContent>
                        )}
                    </Toast>
                ))}
            </Toaster>
        </>
    )
}

