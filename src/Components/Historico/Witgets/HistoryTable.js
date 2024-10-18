const HistoryTable = () => {
    return (
        <div class="container mx-auto md:px-4 px-2" >
            <div class="">
                <div class="md:flex-row flex-col w-full flex gap-2 mt-2 w-full justify-between">
                    <div className="md:flex gap-3">
                        <div class="block bg-[#151618] relative">
                            <input placeholder="Pesquisar"
                                class="appearance-none rounded-[15px]  block pl-4 pr-7 py-2 w-[300px]  bg-[#151618] text-[16px] md:text-sm placeholder-gray-400 text-white" />
                            <span class="h-full absolute inset-y-0 right-2 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                        </div>

                        <div className="hidden md:flex items-center justify-between px-3 w-[320px] rounded-[15px] bg-[#151618]">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.999 0C13.2642 0 13.5186 0.105357 13.7061 0.292893C13.8937 0.48043 13.999 0.734784 13.999 1V2H15.999C16.5295 2 17.0382 2.21071 17.4132 2.58579C17.7883 2.96086 17.999 3.46957 17.999 4V16C17.999 16.5304 17.7883 17.0391 17.4132 17.4142C17.0382 17.7893 16.5295 18 15.999 18H1.99902C1.46859 18 0.959882 17.7893 0.58481 17.4142C0.209737 17.0391 -0.000976562 16.5304 -0.000976562 16V4C-0.000976562 3.46957 0.209737 2.96086 0.58481 2.58579C0.959882 2.21071 1.46859 2 1.99902 2H3.99902V1C3.99902 0.734784 4.10438 0.48043 4.29192 0.292893C4.47945 0.105357 4.73381 0 4.99902 0C5.26424 0 5.51859 0.105357 5.70613 0.292893C5.89367 0.48043 5.99902 0.734784 5.99902 1V2H11.999V1C11.999 0.734784 12.1044 0.48043 12.2919 0.292893C12.4795 0.105357 12.7338 0 12.999 0ZM5.00902 13H4.99902C4.74414 13.0003 4.49899 13.0979 4.31365 13.2728C4.12832 13.4478 4.01679 13.687 4.00185 13.9414C3.98691 14.1958 4.0697 14.4464 4.23329 14.6418C4.39688 14.8373 4.62893 14.9629 4.88202 14.993L5.00902 15C5.27424 15 5.52859 14.8946 5.71613 14.7071C5.90367 14.5196 6.00902 14.2652 6.00902 14C6.00902 13.7348 5.90367 13.4804 5.71613 13.2929C5.52859 13.1054 5.27424 13 5.00902 13ZM9.00902 13H8.99902C8.74414 13.0003 8.49899 13.0979 8.31365 13.2728C8.12832 13.4478 8.01679 13.687 8.00185 13.9414C7.98691 14.1958 8.0697 14.4464 8.23329 14.6418C8.39688 14.8373 8.62893 14.9629 8.88202 14.993L9.00902 15C9.27424 15 9.52859 14.8946 9.71613 14.7071C9.90367 14.5196 10.009 14.2652 10.009 14C10.009 13.7348 9.90367 13.4804 9.71613 13.2929C9.52859 13.1054 9.27424 13 9.00902 13ZM13.009 13H12.999C12.7441 13.0003 12.499 13.0979 12.3137 13.2728C12.1283 13.4478 12.0168 13.687 12.0019 13.9414C11.9869 14.1958 12.0697 14.4464 12.2333 14.6418C12.3969 14.8373 12.6289 14.9629 12.882 14.993L13.009 15C13.2742 15 13.5286 14.8946 13.7161 14.7071C13.9037 14.5196 14.009 14.2652 14.009 14C14.009 13.7348 13.9037 13.4804 13.7161 13.2929C13.5286 13.1054 13.2742 13 13.009 13ZM5.00902 9H4.99902C4.74414 9.00028 4.49899 9.09788 4.31365 9.27285C4.12832 9.44782 4.01679 9.68695 4.00185 9.94139C3.98691 10.1958 4.0697 10.4464 4.23329 10.6418C4.39688 10.8373 4.62893 10.9629 4.88202 10.993L5.00902 11C5.27424 11 5.52859 10.8946 5.71613 10.7071C5.90367 10.5196 6.00902 10.2652 6.00902 10C6.00902 9.73478 5.90367 9.48043 5.71613 9.29289C5.52859 9.10536 5.27424 9 5.00902 9ZM9.00902 9H8.99902C8.74414 9.00028 8.49899 9.09788 8.31365 9.27285C8.12832 9.44782 8.01679 9.68695 8.00185 9.94139C7.98691 10.1958 8.0697 10.4464 8.23329 10.6418C8.39688 10.8373 8.62893 10.9629 8.88202 10.993L9.00902 11C9.27424 11 9.52859 10.8946 9.71613 10.7071C9.90367 10.5196 10.009 10.2652 10.009 10C10.009 9.73478 9.90367 9.48043 9.71613 9.29289C9.52859 9.10536 9.27424 9 9.00902 9ZM13.009 9H12.999C12.7441 9.00028 12.499 9.09788 12.3137 9.27285C12.1283 9.44782 12.0168 9.68695 12.0019 9.94139C11.9869 10.1958 12.0697 10.4464 12.2333 10.6418C12.3969 10.8373 12.6289 10.9629 12.882 10.993L13.009 11C13.2742 11 13.5286 10.8946 13.7161 10.7071C13.9037 10.5196 14.009 10.2652 14.009 10C14.009 9.73478 13.9037 9.48043 13.7161 9.29289C13.5286 9.10536 13.2742 9 13.009 9ZM15.999 4H1.99902V6H15.999V4Z" fill="#2FFE82" />
                            </svg>
                            <p class="text-[#2FFE82] text-[16px] font-bold">De</p>
                            <p className="text-white text-[12px] font-bold">01/09/2024</p>
                            <p class="text-[#2FFE82] font-bold text-[16px]">Até</p>
                            <p className="text-white text-[12px] font-bold">05/09/2024</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7018 16.2895L13.7491 12.3352C14.9343 10.7908 15.4876 8.85338 15.2968 6.91602C15.1061 4.97867 14.1855 3.18641 12.7219 1.90282C11.2583 0.619235 9.36125 -0.0595708 7.41557 0.00410682C5.46989 0.0677844 3.62128 0.869177 2.24474 2.24572C0.8682 3.62226 0.0668079 5.47087 0.00313025 7.41655C-0.0605474 9.36223 0.618258 11.2593 1.90185 12.7229C3.18544 14.1865 4.97769 15.107 6.91505 15.2978C8.8524 15.4886 10.7898 14.9352 12.3342 13.7501L16.2902 17.707C16.3831 17.7999 16.4934 17.8736 16.6148 17.9238C16.7362 17.9741 16.8663 18 16.9977 18C17.1291 18 17.2592 17.9741 17.3806 17.9238C17.5019 17.8736 17.6122 17.7999 17.7051 17.707C17.7981 17.614 17.8717 17.5038 17.922 17.3824C17.9723 17.261 17.9982 17.1309 17.9982 16.9995C17.9982 16.8681 17.9723 16.738 17.922 16.6166C17.8717 16.4952 17.7981 16.3849 17.7051 16.292L17.7018 16.2895ZM2.01339 7.67415C2.01339 6.55475 2.34533 5.46049 2.96723 4.52974C3.58914 3.59899 4.47308 2.87357 5.50727 2.44519C6.54146 2.01681 7.67945 1.90473 8.77734 2.12312C9.87523 2.3415 10.8837 2.88054 11.6752 3.67208C12.4668 4.46361 13.0058 5.47209 13.2242 6.56998C13.4426 7.66787 13.3305 8.80587 12.9021 9.84006C12.4738 10.8742 11.7483 11.7582 10.8176 12.3801C9.88684 13.002 8.79257 13.3339 7.67317 13.3339C6.17258 13.3324 4.73389 12.7356 3.6728 11.6745C2.61172 10.6134 2.01493 9.17475 2.01339 7.67415Z" fill="#F6F7FA" />
                            </svg>
                        </div>

                    </div>


                    <select class=" text-white font-bold p-2 w-full md:w-[150px] bg-[#151618] text-[14px] text-white rounded-[6px] md:rounded-[15px] custom-select  px-3">
                        <option>FILTRAR</option>
                    </select>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 pt-3 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th style={{borderBottom:"1px solid #2FFE82"}}
                                        class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                        PARIDADE
                                    </th>
                                    <th style={{borderBottom:"1px solid #2FFE82"}}
                                        class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                        ENTRADA
                                    </th>
                                    <th style={{borderBottom:"1px solid #2FFE82"}}
                                        class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                        DATA
                                    </th>
                                    <th style={{borderBottom:"1px solid #2FFE82"}}
                                        class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                        STATUS
                                    </th>
                                    <th style={{borderBottom:"1px solid #2FFE82"}}
                                        class="px-5 font-bold py-4  bg-[#151618]   text-left text-xs text-white">
                                        LUCRO
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-white font-bold">
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Meta
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 21, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#2FFE82] border border-[#2FFE82]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#2FFE82] opacity-50 rounded-full"></span>
                                            <span class="relative flex items-center gap-2">WIN
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 1.125L9.88475 6.4683C9.82668 6.53096 9.76686 6.59189 9.70538 6.651C9.38451 6.94626 8.96909 7.10949 8.53856 7.10949C8.10803 7.10949 7.69261 6.94626 7.37175 6.651C7.33062 6.6132 7.28425 6.5646 7.19237 6.4683C7.1005 6.3729 7.05412 6.3243 7.013 6.2865C6.69214 5.99124 6.27672 5.82801 5.84619 5.82801C5.41566 5.82801 5.00024 5.99124 4.67937 6.2865C4.61789 6.34561 4.55807 6.40654 4.5 6.4692L1 10.125M15 1.125V6.525M15 1.125H9.75" stroke="#2FFE82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    DogeCoin
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 01, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#2FFE82] border border-[#2FFE82]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#2FFE82] opacity-50 rounded-full"></span>
                                            <span class="relative flex items-center gap-2">WIN
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 1.125L9.88475 6.4683C9.82668 6.53096 9.76686 6.59189 9.70538 6.651C9.38451 6.94626 8.96909 7.10949 8.53856 7.10949C8.10803 7.10949 7.69261 6.94626 7.37175 6.651C7.33062 6.6132 7.28425 6.5646 7.19237 6.4683C7.1005 6.3729 7.05412 6.3243 7.013 6.2865C6.69214 5.99124 6.27672 5.82801 5.84619 5.82801C5.41566 5.82801 5.00024 5.99124 4.67937 6.2865C4.61789 6.34561 4.55807 6.40654 4.5 6.4692L1 10.125M15 1.125V6.525M15 1.125H9.75" stroke="#2FFE82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Tesla
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 10, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#DB4831]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#DB48313D] opacity-50 rounded-full"></span>
                                            <span class="items-center relative flex gap-2">LOSS
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10.75L9.88475 5.4067C9.82668 5.34404 9.76686 5.28311 9.70538 5.224C9.38451 4.92874 8.96909 4.76551 8.53856 4.76551C8.10803 4.76551 7.69261 4.92874 7.37175 5.224C7.33062 5.2618 7.28425 5.3104 7.19237 5.4067C7.1005 5.5021 7.05412 5.5507 7.013 5.5885C6.69214 5.88376 6.27672 6.04699 5.84619 6.04699C5.41566 6.04699 5.00024 5.88376 4.67937 5.5885C4.61789 5.52939 4.55807 5.46846 4.5 5.4058L1 1.75M15 10.75V5.35M15 10.75H9.75" stroke="#DB4831" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-[#DB4831]  text[14px]m">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">Jan 18, 2020</p>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#DB4831]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#DB48313D] opacity-50 rounded-full"></span>
                                            <span class="relative flex gap-2">LOSS
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10.75L9.88475 5.4067C9.82668 5.34404 9.76686 5.28311 9.70538 5.224C9.38451 4.92874 8.96909 4.76551 8.53856 4.76551C8.10803 4.76551 7.69261 4.92874 7.37175 5.224C7.33062 5.2618 7.28425 5.3104 7.19237 5.4067C7.1005 5.5021 7.05412 5.5507 7.013 5.5885C6.69214 5.88376 6.27672 6.04699 5.84619 6.04699C5.41566 6.04699 5.00024 5.88376 4.67937 5.5885C4.61789 5.52939 4.55807 5.46846 4.5 5.4058L1 1.75M15 10.75V5.35M15 10.75H9.75" stroke="#DB4831" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-[#DB4831]  text[14px]m">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Meta
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 21, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#2FFE82] border border-[#2FFE82]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#2FFE82] opacity-50 rounded-full"></span>
                                            <span class="relative flex items-center gap-2">WIN
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 1.125L9.88475 6.4683C9.82668 6.53096 9.76686 6.59189 9.70538 6.651C9.38451 6.94626 8.96909 7.10949 8.53856 7.10949C8.10803 7.10949 7.69261 6.94626 7.37175 6.651C7.33062 6.6132 7.28425 6.5646 7.19237 6.4683C7.1005 6.3729 7.05412 6.3243 7.013 6.2865C6.69214 5.99124 6.27672 5.82801 5.84619 5.82801C5.41566 5.82801 5.00024 5.99124 4.67937 6.2865C4.61789 6.34561 4.55807 6.40654 4.5 6.4692L1 10.125M15 1.125V6.525M15 1.125H9.75" stroke="#2FFE82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    DogeCoin
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 01, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#2FFE82] border border-[#2FFE82]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#2FFE82] opacity-50 rounded-full"></span>
                                            <span class="relative flex items-center gap-2">WIN
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 1.125L9.88475 6.4683C9.82668 6.53096 9.76686 6.59189 9.70538 6.651C9.38451 6.94626 8.96909 7.10949 8.53856 7.10949C8.10803 7.10949 7.69261 6.94626 7.37175 6.651C7.33062 6.6132 7.28425 6.5646 7.19237 6.4683C7.1005 6.3729 7.05412 6.3243 7.013 6.2865C6.69214 5.99124 6.27672 5.82801 5.84619 5.82801C5.41566 5.82801 5.00024 5.99124 4.67937 6.2865C4.61789 6.34561 4.55807 6.40654 4.5 6.4692L1 10.125M15 1.125V6.525M15 1.125H9.75" stroke="#2FFE82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Tesla
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 10, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-[6px] border-b border-gray-200 bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#DB4831]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#DB48313D] opacity-50 rounded-full"></span>
                                            <span class="relative flex gap-2">LOSS
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10.75L9.88475 5.4067C9.82668 5.34404 9.76686 5.28311 9.70538 5.224C9.38451 4.92874 8.96909 4.76551 8.53856 4.76551C8.10803 4.76551 7.69261 4.92874 7.37175 5.224C7.33062 5.2618 7.28425 5.3104 7.19237 5.4067C7.1005 5.5021 7.05412 5.5507 7.013 5.5885C6.69214 5.88376 6.27672 6.04699 5.84619 6.04699C5.41566 6.04699 5.00024 5.88376 4.67937 5.5885C4.61789 5.52939 4.55807 5.46846 4.5 5.4058L1 1.75M15 10.75V5.35M15 10.75H9.75" stroke="#DB4831" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-[#DB4831] text-[14px]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-8 h-8">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">Jan 18, 2020</p>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-[#DB4831]">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-[#DB48313D] opacity-50 rounded-full"></span>
                                            <span class="relative flex gap-2">LOSS
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10.75L9.88475 5.4067C9.82668 5.34404 9.76686 5.28311 9.70538 5.224C9.38451 4.92874 8.96909 4.76551 8.53856 4.76551C8.10803 4.76551 7.69261 4.92874 7.37175 5.224C7.33062 5.2618 7.28425 5.3104 7.19237 5.4067C7.1005 5.5021 7.05412 5.5507 7.013 5.5885C6.69214 5.88376 6.27672 6.04699 5.84619 6.04699C5.41566 6.04699 5.00024 5.88376 4.67937 5.5885C4.61789 5.52939 4.55807 5.46846 4.5 5.4058L1 1.75M15 10.75V5.35M15 10.75H9.75" stroke="#DB4831" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </span>
                                    </td>
                                    <td class="px-5 py-[6px] bg-[#151618] text-[#DB4831] text-[14px]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="px-5 w-full justify-between items-center py-2 bg-[#151618] border-t flex gap-2">
                            <div class="flex gap-3 mt-2 xs:mt-0">
                                <button
                                    class=" bg-[#2E2F323D]   py-2 px-4  mb-2 rounded">
                                    <div className="flex items-center gap-2">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 1L1.5 6L6.5 11" stroke="#F6F7FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <p className="text-white text-[13px]">Anterior</p>

                                    </div>
                                </button>
                                <button
                                    class=" bg-[#2E2F323D]   py-2 px-4 mb-2 rounded">
                                    <div className="flex items-center gap-2">
                                        <p className="text-white text-[13px]">Proximo</p>
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L6 6L1 1" stroke="#F6F7FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                </button>
                            </div>
                            <span class="text-xs  text-white">
                                Pagina 1 de 10
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HistoryTable