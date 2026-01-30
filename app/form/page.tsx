"use client";

import { useState } from "react";

function FormPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) e.email = "กรุณากรอกอีเมล";
    else if (!emailRegex.test(email)) e.email = "รูปแบบอีเมลไม่ถูกต้อง";

    if (!password) e.password = "กรุณากรอกรหัสผ่าน";
    else if (password.length < 6) e.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    // Simulate successful submit
    setSubmitted(true);
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="h-screen">
      <div className="p-5">
        <h1 className="text-3xl text-center">ลงทะเบียนเข้าสู่ระบบ</h1>
        <p className="text-center">กรุณากรอกข้อมูลของคุณ</p>
      </div>

      <div className="flex justify-center">
        <form className="w-96 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block mb-1 font-medium">กรุณาระบุ E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="input w-full"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">กรุณาระบุ รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="อย่างน้อย 6 ตัวอักษร"
              className="input w-full"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-600 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              ลงทะเบียน
            </button>
            <button type="button" className="btn" onClick={handleReset}>
              ล้าง
            </button>
          </div>

          {submitted && (
            <div className="mt-2 p-3 bg-green-100 text-green-800 rounded">
              ลงทะเบียนสำเร็จ — ขอบคุณ!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormPage;