import React from "react";
import BarChart from "./BarChart";
import KpChart from "./KpChart";
import CircleChart from "./CircleChart";
import '../index.css';

const Dashboard: React.FC = () => {
  return (
    <div id="dashboardContainer" className="p-16 sm:p-16 bg-[#ECEDFF]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2" style={{ fontSize: '32px' }} >Dashboard intro title</h1>
            <p className="text-gray-500">Ac vulputate purus semper fusce at. Non dolor in cras.</p>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 bg-white p-4 rounded-full">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-gray-600">query_stats</span>
              <span className="text-gray-600">Compare</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              <span className="material-symbols-outlined">group</span>
              <span>Managers</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-gray-600">person</span>
              <span className="text-gray-600">Employees</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-xl shadow-lg flex flex-col max-h-[208px]"> 
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-bold">RLQ</h2>
              <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                info
              </span>
            </div>
            <div className="relative flex-grow rounded-lg overflow-hidden px-4">
              <div className="h-px bg-[#EFF2F5] my-4" />
              <div className="h-px bg-[#EFF2F5] my-4" />
              <div className="h-px bg-[#EFF2F5] my-4" />
              <div className="h-px bg-[#EFF2F5] my-4" />

              <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#F18C5C] to-[#F18C5C] rounded-b-lg transition-all duration-300 hover:h-[65%]">
                <svg width="304" height="24" viewBox="0 0 304 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 right-0 top-[-12px]"
                >
                  <g clip-path="url(#clip0_1_239)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M406.308 9.39525L388.727 10.6171C373.1 11.839 337.939 14.2828 304.731 13.0609C271.523 11.839 236.362 6.95149 203.154 3.89679C169.946 0.231145 134.785 -0.990735 101.577 0.842085C68.3691 2.67491 33.2078 8.17337 17.5806 10.6171L3.8147e-06 13.0609V32H17.5806C33.2078 32 68.3691 32 101.577 32C134.785 32 169.946 32 203.154 32C236.362 32 271.523 32 304.731 32C337.939 32 373.1 32 388.727 32H406.308V9.39525Z" fill="#F18C5C" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M406.308 9.39525L388.727 10.6171C373.1 11.839 337.939 14.2828 304.731 13.0609C271.523 11.839 236.362 6.95149 203.154 3.89679C169.946 0.231145 134.785 -0.990735 101.577 0.842085C68.3691 2.67491 33.2078 8.17337 17.5806 10.6171L3.8147e-06 13.0609V32H17.5806C33.2078 32 68.3691 32 101.577 32C134.785 32 169.946 32 203.154 32C236.362 32 271.523 32 304.731 32C337.939 32 373.1 32 388.727 32H406.308V9.39525Z" fill="white" fill-opacity="0.32" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M304 12.6763L290.326 14.2222C276.652 15.7681 249.305 18.8599 221.957 16.541C196.563 14.2222 169.215 6.49269 141.868 5.71974C114.52 4.94679 87.1723 11.1304 59.8247 10.3574C32.4771 9.58449 5.12945 1.855 -20.2648 0.309097C-47.6124 -1.2368 -74.96 3.4009 -88.6339 5.71974L-102.308 8.03859V32H-88.6339C-74.96 32 -47.6124 32 -20.2648 32C5.12945 32 32.4771 32 59.8247 32C87.1723 32 114.52 32 141.868 32C169.215 32 196.563 32 221.957 32C249.305 32 276.652 32 290.326 32H304V12.6763Z" fill="#F18C5C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_239">
                      <rect width="304" height="24" fill="white" transform="matrix(-1 0 0 1 304 3.05176e-05)" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
                  <span className="text-white text-2xl font-bold">59,47%</span>
                  <div className="flex items-center text-white">
                    <span className="material-symbols-outlined mr-2">person</span>
                    <span className="font-medium">56 884</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl max-h-[208px]">
            <CircleChart />
          </div>

          <div className="bg-white p-6 rounded-xl max-h-[208px]">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">MZI</h3>
              <span className="material-symbols-outlined text-gray-400">info</span>
            </div>
            <div className="flex justify-center items-center h-40 relative"></div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold mb-4">Survey Topics</h2>
              <span className="material-symbols-outlined text-gray-400">info</span>
            </div>
            <div className="h-px bg-[#EFF2F5] my-2" />
            <div className="h-[100px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="flex items-start p-2  hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <span className="font-medium text-gray-600 flex-shrink-0 text-sm">A. </span>
                <p className="ml-2 text-gray-700 flex-grow text-sm">Pulvinar iaculis placerat vitae dui</p>
              </div>
              <div className="h-px bg-[#EFF2F5] my-2" />

              <div className="flex items-start p-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <span className="font-medium text-gray-600 text-sm">B. </span>
                <p className="ml-2 text-gray-700 text-sm">Massa morbi mattis lectus ornare</p>
              </div>
              <div className="h-px bg-[#EFF2F5] my-2" />

              <div className="flex items-start  p-2  hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <span className="font-medium text-gray-600 text-sm">C. </span>
                <p className="ml-2 text-gray-700 text-sm">Diam sem vestibulum purus morbi</p>
              </div>
              <div className="h-px bg-[#EFF2F5] my-2" />

              <div className="flex items-start  p-2  hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <span className="font-medium text-gray-600 text-sm">D. </span>
                <p className="ml-2 text-gray-700 text-sm">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="h-px bg-[#EFF2F5] my-2" />

              <div className="flex items-start  p-2  hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                <span className="font-medium text-gray-600 text-sm">E.</span>
                <p className="ml-2 text-gray-700 text-sm">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Survey Topics Scores</h2>
              <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                info
              </span>
            </div>
            <div className="h-[200px]">
              <BarChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">KPs</h3>
              <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                info
              </span>
            </div>
            <div className="h-[200px]">
              <KpChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
