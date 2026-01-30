'use client';

import { useState } from 'react';

function FormPage() {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => setPasswordVisible((v) => !v);

    return (
        <div className="h-screen">
            <div className="p-5">
                <h1 className="text-3xl text-center">ลงทะเบียนเข้าสู่ระบบ</h1>
                <p className="text-center">กรุณากรอกข้อมูลของคุณ</p>
            </div>

            <div className="flex justify-center">
                <form className="w-96 space-y-4">
                    <h2>กรุณาระบุ E-Mail</h2>
                    <input type="text" placeholder="Type here" className="input" />

                    <h2>กรุณาระบุ รหัสผ่าน</h2>

                    <div className="flex items-center gap-2">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Type here"
                            className="input flex-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            onClick={togglePassword}
                            className="btn btn-outline"
                            aria-pressed={passwordVisible}
                        >
                            {passwordVisible ? 'ซ่อน' : 'แสดง'}
                        </button>
                    </div>

                    <button className="btn btn-primary">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
}

export default FormPage;