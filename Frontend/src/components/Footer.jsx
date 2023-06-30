const Footer = () => {
  return (
    <div className="flex bg-gray-800 text-gray-100">
      <div className="bg-blue-700 flex w-1/4 justify-center">
        <button>logo</button>
        <div>
          {/* 깃허브 링크 등 */}
          <img />
        </div>
      </div>
      <div className="flex flex-col w-3/4">
        <div className=" bg-zinc-700  flex items-center justify-between py-24 px-80">
          <div>ABOUTS</div>
          <div>TEAM</div>
          <div>CONTACTS</div>
        </div>
        <div className="flex align-right py-8">
          © 2023 Team MotJa. All rights reserved. Reproduction, distribution, or
          modification without authorization is strictly prohibited.
        </div>
      </div>
    </div>
  );
};

export default Footer;

//로고 클릭 시 메인페이지 이동
