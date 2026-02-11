const ErrorState = (message, retryAction = "location.reload()") => {
    return `
    <div class="col-span-full text-center py-12">
        <p class="text-red-600 text-lg mb-4">${message}</p>
        <button onclick="${retryAction}" class="bg-cyaan hover:bg-cyaan/80 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Probeer opnieuw
        </button>
    </div>`;
}

export default ErrorState;
