import React from 'react'
import { RiHome3Line, RiLogoutCircleLine, RiMailLine, RiNotification3Line, RiPercentLine, RiPieChartLine, RiSettings4Line } from "react-icons/ri";

const Sidebar = (props) => {

    const { showMenu } = props;

    return (
        <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className='pl-4'>
                    {/* Logo */}
                    <li>
                        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
                    </li>
                    {/* Icon: Home */}
                    <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                        <a href='#' className='bg-[#f8fafc] p-4 flex justify-center rounded-xl'>
                            <RiHome3Line className='text-2xl' />
                        </a>
                    </li>
                    {/* Icon: Percentage */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiPercentLine className='text-2xl' />
                        </a>
                    </li>
                    {/* Icon: PieChart */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiPieChartLine className='text-2xl' />
                        </a>
                    </li>
                    {/* Icon: Mail */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiMailLine className='text-2xl' />
                        </a>
                    </li>
                    {/* Icon: Notification */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiNotification3Line className='text-2xl' />
                        </a>
                    </li>
                    {/* Icon: Settings */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiSettings4Line className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='pl-4'>
                    {/* Icon: Logout */}
                    <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                        <a href='#' className='group-hover:bg-[#f8fafc] p-4 flex justify-center rounded-xl text-[#f8fafc] group-hover:text-[#262837] transition-colors'>
                            <RiLogoutCircleLine className='text-2xl' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
