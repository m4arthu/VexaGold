const HistoryTable = () => {
    return (
        <div class="container mx-auto px-4 sm:px-8" >
            <div class="">
                <div class="flex mt-5 flex w-full justify-between">
                    <div class="block relative">
                        <input placeholder="Pesquisar"
                            class="appearance-none rounded  block pl-2 pr-6 py-2 w-full bg-[#151618] text-sm placeholder-gray-400 text-white" />
                        <span class="h-full absolute inset-y-0 right-2 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 font-bold py-3 border-b-2 border-[#2FFE82] border bg-[#151618]   text-left text-xs text-white">
                                        PARIDADE
                                    </th>
                                    <th
                                        class="px-5 font-bold py-3 border-b-2 border-[#2FFE82] border bg-[#151618]   text-left text-xs text-white">
                                        ENTRADA
                                    </th>
                                    <th
                                        class="px-5 font-bold py-3 border-b-2 border-[#2FFE82] border bg-[#151618]   text-left text-xs text-white">
                                        DATA
                                    </th>
                                    <th
                                        class="px-5 font-bold py-3 border-b-2 border-[#2FFE82] border bg-[#151618]   text-left text-xs text-white">
                                        STATUS
                                    </th>
                                    <th
                                        class="px-5 font-bold py-3 border-b-2 border-[#2FFE82] border bg-[#151618]   text-left text-xs text-white">
                                        LUCRO
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-white font-bold">
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 21, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 01, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 10, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-[#DB4831]  text[14px]m">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">Jan 18, 2020</p>
                                    </td>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-[#DB4831]  text[14px]m">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 21, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 01, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618]  text-sm text-[#2FFE82]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$50,00</p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">
                                            Jan 10, 2020
                                        </p>
                                    </td>
                                    <td class="px-5 py-2 border-b border-gray-200 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-[#DB4831] text-[14px]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">R$20,00</p>
                                    </td>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
                                        <p class="whitespace-no-wrap">Jan 18, 2020</p>
                                    </td>
                                    <td class="px-5 py-2 bg-[#151618] text-sm">
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
                                    <td class="px-5 py-2 bg-[#151618] text-[#DB4831] text-[14px]">
                                        <span class="relative">+R$50,00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="px-5 w-full justify-between items-center py-2 bg-[#151618] border-t flex gap-2">
                            <div class="flex gap-3 mt-2 xs:mt-0">
                                <button
                                    class=" bg-[#2E2F323D]   py-2 px-4 rounded">
                                    <div className="flex items-center gap-2">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 1L1.5 6L6.5 11" stroke="#F6F7FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <p className="text-white text-[13px]">Anterior</p>

                                    </div>
                                </button>
                                <button
                                    class=" bg-[#2E2F323D]   py-2 px-4 rounded">
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