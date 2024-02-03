
export default function Footer() {
    return (
        <div className="h-fit w-full bg-slate-900 mt-[2em] grid 1xl:grid-cols-6 2xl:grid-cols-7 xlmob:grid-cols-3 grid-cols-2 object-cover">
            <div className="col-span-2 flex flex-col">
                <div className="w-full h-[50%]">
                    <p className="text-white w-[80%] px-10 pt-4">
                        Luxury apartments at Karyavattom near IT hub in Trivandrum. With only a few units left, this project will be completed by 2027.
                    </p>
                </div>
                <div className="bg-slate-800 rounded-lg w-[80%] h-[50%] flex flex-col justify-evenly mx-10 px-3 xlmob:mt-[3vw] smmob:mt-[2em] mt-[3em]">
                    <h1 className="text-white text-[21px]">Call us for more  details</h1>
                    <p className="text-white text-2xl font-medium">+91 8075488945</p>
                </div>
            </div>
            <div className="">

            </div>
            <div className="col-span-3 flex justify-center items-center text-center mt-5">
                <h1 className="text-white text-2xl font-medium">Luxury residences at Karyavattom, Thiruvananthapuram</h1>
            </div>
        </div>
    )
}
