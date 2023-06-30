const Detail = () => {
  return (
    <div className="bg-red-200 max-h-full">
      <div className=" bg-red-400 flex px-32 h-1/2 items-center">
        <img
          className=" w-80 h-80 bg-gray-50 rounded-full text-center my-20 mx-20"
          alt="프로필 이미지"
          src="../../public/images/profile.png"
        />
        <div className=" flex flex-col h-80 w-2/3 justify-between items-center">
          <h3 className="bg-gray-50 flex justify-between px-20 py-12">
            !!!!내 정보 입력 (백엔드에서 정보 받아와야함) & 정보수정 버튼 만들기
            !!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            quisquam aliquid quis vero exercitationem eos, veritatis, nesciunt
            non dolor facere soluta, incidunt voluptate aut ratione voluptas ad
            quidem quam aspernatur.
          </h3>
          <div className="flex">
            <button className="bg-blue-300 mx-10 p-4 rounded-xl text-lg">
              공유하기
            </button>
            <button className="bg-blue-300 mx-10 p-4 rounded-xl text-lg">
              충전하기
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-96 py-20">
        <img className="bg-gray-500 w-2/3 py-10" alt="진행상황 상태바" />
        <button className="bg-blue-300 text-lg py-10 px-14 rounded-xl">
          민팅버튼
        </button>
      </div>
    </div>
  );
};

export default Detail;
