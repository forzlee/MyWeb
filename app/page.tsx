function HomePage() {
  return (
  <div><div className="text-center mt-3 p-3">
    <h1 className="text-4xl bg-blue-300">Welcome to My App</h1>
    <p className="text-2xl p-3 bg-blue-200">hi forz</p>
    </div>
    <div className="text-center text-2xl mt-6 text-amber-300">
      <a href="/light">บทเรียนที่1 State การเปิด/ปิดหลอดไฟ</a>
      <hr>
      </hr>
    <a href="/count">บทเรียนที่2 State ของการเพิ่มลดตัวเลข</a>
    </div>
  </div>
  );
}

export default HomePage