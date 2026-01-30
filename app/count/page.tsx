'use client';
import { useState } from "react";

function CountPage() {
    const [count, setCount] = useState(1)
    return (
        <div>
            <div className="text-center mt-6 p-4">
                <h1 className="text-3xl">บทเรียนที่ 2 State ของการเพิ่มลดตัวเลข</h1>
            </div>

            <div className="mt-5">
                <h1 className="text-center text-6xl">{count}</h1>
            </div>
            <div className="flex justify-center mt-5">
                <button
                    className="p-8 text-2xl bg-blue-200 rounded-lg cursor-pointer" 
                    onClick={() => setCount(count + 1)} >

                    เพิ่ม
                </button>
                <button
                className="p-8 text-2xl bg-pink-200 rounded-lg cursor-pc"
                    onClick={() => setCount(count - 1)}>
                    

                    ลด
                </button>
            </div>
        </div>
    );
}
export default CountPage;