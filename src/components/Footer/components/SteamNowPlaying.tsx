export default function SteamNowPlaying({
  isPlaying = false,
  gameUrl,
  profileUrl,
  personName,
  gameName,
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="mb-8 flex flex-col items-center space-x-0 sm:space-x-2 md:flex-row">
        <div className="inline-flex max-w-full flex-col items-center space-x-2 truncate sm:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rounded-full dark:border dark:border-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm-9.406-17.183v11.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.583 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v8.587h24v-24h-24zm15.322 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.753 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.401-1.077 2.401-2.401 0-1.323-1.076-2.401-2.401-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.078 2.401 2.401 2.401z" />
          </svg>
          {isPlaying && gameUrl ? (
            <a
              className="capsize max-w-max truncate break-words  font-medium text-stone-800 dark:text-stone-200"
              href={gameUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gameName}
            </a>
          ) : (
            <p className="capsize font-medium text-stone-800 dark:text-stone-200">
              Not Playing
            </p>
          )}
          <span className="capsize mx-2 hidden text-stone-500 dark:text-stone-300 sm:block">
            {" – "}
          </span>
          {isPlaying ? (
            <a
              href={profileUrl}
              className="capsize max-w-max truncate text-stone-500 underline dark:text-stone-300"
            >
              {personName}
            </a>
          ) : (
            <p className="capsize max-w-max truncate text-stone-500 dark:text-stone-300">
              Steam
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
