"use client"
import {useEffect, useState} from "react"
import type React from "react"

import {Input} from "./ui/input"
import {Textarea} from "./ui/textarea"
import {Button} from "./ui/button"
import {CheckCircle, AlertCircle, MessageSquare} from "lucide-react"

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
        type: null,
        message: "",
    })

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const name = String(formData.get("name") || "").trim()
        const phone = String(formData.get("phone") || "").trim()
        const message = String(formData.get("message") || "").trim()

        if (!name) {
            setStatus({type: "error", message: "Будь ласка, вкажіть ваше ім'я"})
            return
        }
        if (!phone) {
            setStatus({type: "error", message: "Будь ласка, вкажіть номер телефону"})
            return
        }
        if (phone.length < 10) {
            setStatus({type: "error", message: "Будь ласка, вкажіть коректний номер телефону"})
            return
        }

        setLoading(true)
        setStatus({type: null, message: ""})

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, phone, message}),
            })

            if (!res.ok) throw new Error("Network error")

            setStatus({
                type: "success",
                message: "Дякуємо! Заявку успішно надіслано. Ми зв'яжемось з вами найближчим часом у робочі години.",
            })
            form.reset()
        } catch (err) {
            setStatus({
                type: "error",
                message: "На жаль, не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте безпосередньо.",
            })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (status.type !== null) setTimeout(() => setStatus({type: null, message: ''}), 5000)
    }, [status]);

    return (
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Запис на консультацію</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Залиште заявку, і ми зв'яжемось з вами для призначення зручного часу консультації
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-card rounded-2xl border p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="h-6 w-6 text-brand"/>
                            <h3 className="text-xl font-semibold">Залишити заявку</h3>
                        </div>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Ім'я <span className="text-destructive">*</span>
                                    </label>
                                    <Input name="name" placeholder="Ваше повне ім'я" required/>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Телефон <span className="text-destructive">*</span>
                                    </label>
                                    <Input name="phone" type="tel" placeholder="+38 (050) 262-66-66" required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Повідомлення</label>
                                <Textarea
                                    name="message"
                                    placeholder="Коротко опишіть ваше питання або симптоми (необов'язково)"
                                    rows={4}
                                    className="resize-none"
                                />
                            </div>

                            {status.type && (
                                <div
                                    className={`flex items-start gap-3 p-4 rounded-lg ${
                                        status.type === "success"
                                            ? "bg-green-50 border border-green-200 text-green-800"
                                            : "bg-red-50 border border-red-200 text-red-800"
                                    }`}
                                >
                                    {status.type === "success" ? (
                                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0"/>
                                    ) : (
                                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0"/>
                                    )}
                                    <p className="text-sm">{status.message}</p>
                                </div>
                            )}

                            <div className="space-y-4">
                                <Button type="submit" disabled={loading} className="w-full h-12 text-base">
                                    {loading ? "Надсилання..." : "Надіслати заявку"}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    Натискаючи «Надіслати заявку», ви погоджуєтесь на обробку персональних даних
                                    відповідно до політики
                                    конфіденційності
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-muted-foreground">
                            Або зателефонуйте безпосередньо за номером, вказаним вище на сторінці
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
