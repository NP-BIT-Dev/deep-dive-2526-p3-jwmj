const PageBanner = (title) => {
    return `
    <div class="bg-cyaan/75 py-40 rounded-b-3xl mb-8">
        <div class="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-6 my-auto">${title}</h1>
        </div>
    </div>`;
}

export default PageBanner;
