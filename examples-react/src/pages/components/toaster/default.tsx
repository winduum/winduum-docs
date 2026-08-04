import { useState } from "react"
import { Button } from "@/components/button"
import { Title } from "@/components/title"
import { Text } from "@/components/text"
import { Toast, ToastContent } from "@/components/toast"
import { Toaster } from "@/components/toaster"

export function Example() {
    const [toasts, setToasts] = useState<number[]>([Date.now()])

    const closeToast = (toast: number) => {
        setToasts(current => current.filter(item => item !== toast))
    }

    const closeToaster = () => {
        setToasts([])
    }

    return (
        <>
            <Button className="muted" onClick={closeToaster}>Close all</Button>

            <Toaster className="items-end">
                {toasts.map((toast) => (
                    <Toast key={toast} onClose={() => closeToast(toast)}>
                        <ToastContent>
                            <div className="flex-col">
                                <Title>Hello toast</Title>
                                <Text>Amazing toast</Text>
                            </div>
                            <Button className="muted ml-auto" data-action="closeToast">Close</Button>
                        </ToastContent>
                    </Toast>
                ))}
            </Toaster>
        </>
    )
}

