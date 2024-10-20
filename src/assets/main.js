const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLoSWVnSA9vG9qV0CVCpg5WwEy3LiP7udY&part=snippet&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '916792c950mshec0bb8bb56e77dfp1c5181jsnbac033bafeb4',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" srcset="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();