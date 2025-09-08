"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CoinFlipPage() {
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<"heads" | "tails" | null>(null)
  const [showResult, setShowResult] = useState(false)

  const flipCoin = () => {
    if (isFlipping) return

    setIsFlipping(true)
    setShowResult(false)
    setResult(null)

    // Simulate coin flip animation duration
    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? "heads" : "tails"
      setResult(newResult)
      setIsFlipping(false)
      setShowResult(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-slate-600 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Flip the coin</h1>

        <p className="text-lg md:text-xl text-white/80 mb-12">Press the coin or the button to flip the coin</p>

        <div className="relative flex flex-col items-center space-y-8">
          <div
            className={`relative cursor-pointer transition-transform duration-200 hover:scale-105 ${
              isFlipping ? "animate-spin" : ""
            }`}
            onClick={flipCoin}
            style={{
              animation: isFlipping ? "spin 2s linear" : "none",
            }}
          >
            {!isFlipping && !result && (
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="80" fill="#FDDB5F" />
                <g filter="url(#filter0_i_3484_8778)">
                  <circle cx="79.5" cy="80.5" r="67.5" fill="#FCB003" />
                </g>
                <g filter="url(#filter1_d_3484_8778)">
                  <path
                    d="M73.9315 46.3339L73.8196 39.933C73.7823 38.5231 74.4723 37.8182 75.8896 37.8182L84.142 37.8746C85.4661 37.8746 86.1189 38.5513 86.1002 39.9048L85.9603 45.9391C85.9416 46.8978 86.3985 47.4806 87.331 47.6874C95.9097 49.5484 101.327 54.7556 103.584 63.3089C104.199 65.6023 103.332 66.7584 100.982 66.7772L95.5553 66.8336C94.558 66.8499 93.5799 66.5621 92.7507 66.0082C91.9214 65.4543 91.2802 64.6604 90.9117 63.7319C88.8137 58.4589 81.7642 59.2484 76.7848 59.615C70.7425 60.0662 66.4625 63.0551 68.6724 69.6534C69.1124 70.9781 69.9598 72.1271 71.0916 72.9333C72.2235 73.7395 73.5808 74.1611 74.9665 74.1368C85.0931 73.9394 94.4924 73.883 100.591 83.1883C109.039 96.1028 100.675 107.748 87.6667 113.021C86.4172 113.529 85.8111 114.46 85.8484 115.813L85.9323 120.804C85.9509 121.819 85.4661 122.327 84.4777 122.327L75.8896 122.411C75.6278 122.415 75.3679 122.365 75.1252 122.265C74.8826 122.164 74.6622 122.015 74.477 121.825C74.2918 121.636 74.1456 121.411 74.0471 121.163C73.9486 120.914 73.8998 120.649 73.9035 120.381L74.0154 114.657C74.0341 113.491 73.4839 112.777 72.365 112.514C63.2828 110.408 57.8372 104.656 56.0282 95.2569C55.9873 95.0585 55.9909 94.8535 56.039 94.6563C56.0872 94.4592 56.1786 94.2747 56.3067 94.116C56.4348 93.9572 56.5966 93.8281 56.7805 93.7378C56.9644 93.6474 57.1659 93.5981 57.3709 93.5932L65.8191 93.4804C66.8262 93.4616 67.5627 93.9128 68.029 94.8339C69.9871 98.8192 73.0364 100.821 77.1765 100.84C83.135 100.896 91.8069 101.178 91.8348 92.9165C91.8908 83.6112 74.4071 86.9386 68.3367 84.6546C50.2935 77.7743 52.5314 51.8888 72.5887 47.9694C72.9704 47.8963 73.3143 47.6923 73.5599 47.3931C73.8055 47.094 73.9371 46.7189 73.9315 46.3339Z"
                    fill="#FEDB5D"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.00195312 79.3787C0.334289 35.6889 35.6884 0.334716 79.3783 0.00238037L0.00195312 79.3787ZM51.5733 154.802C31.5678 147.196 15.4038 131.794 6.79163 112.308L112.308 6.79206C131.794 15.4043 147.195 31.5683 154.802 51.5737L51.5733 154.802ZM159.891 84.214C157.772 125.042 125.042 157.772 84.2136 159.891L159.891 84.214Z"
                  fill="white"
                  fillOpacity="0.15"
                />
                <defs>
                  <filter
                    id="filter0_i_3484_8778"
                    x="12"
                    y="13"
                    width="135"
                    height="135"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3484_8778" />
                  </filter>
                  <filter
                    id="filter1_d_3484_8778"
                    x="54"
                    y="37.8182"
                    width="50"
                    height="86.5933"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3484_8778" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3484_8778" result="shape" />
                  </filter>
                </defs>
              </svg>
            )}

            {isFlipping && (
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="80" fill="#FDDB5F" />
                <g filter="url(#filter0_i_flip)">
                  <circle cx="79.5" cy="80.5" r="67.5" fill="#FCB003" />
                </g>
                <defs>
                  <filter
                    id="filter0_i_flip"
                    x="12"
                    y="13"
                    width="135"
                    height="135"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_flip" />
                  </filter>
                </defs>
              </svg>
            )}

            {showResult && result === "heads" && (
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="80" fill="#FDDB5F" />
                <g filter="url(#filter0_i_3484_8778)">
                  <circle cx="79.5" cy="80.5" r="67.5" fill="#FCB003" />
                </g>
                <g filter="url(#filter1_d_3484_8778)">
                  <path
                    d="M73.9315 46.3339L73.8196 39.933C73.7823 38.5231 74.4723 37.8182 75.8896 37.8182L84.142 37.8746C85.4661 37.8746 86.1189 38.5513 86.1002 39.9048L85.9603 45.9391C85.9416 46.8978 86.3985 47.4806 87.331 47.6874C95.9097 49.5484 101.327 54.7556 103.584 63.3089C104.199 65.6023 103.332 66.7584 100.982 66.7772L95.5553 66.8336C94.558 66.8499 93.5799 66.5621 92.7507 66.0082C91.9214 65.4543 91.2802 64.6604 90.9117 63.7319C88.8137 58.4589 81.7642 59.2484 76.7848 59.615C70.7425 60.0662 66.4625 63.0551 68.6724 69.6534C69.1124 70.9781 69.9598 72.1271 71.0916 72.9333C72.2235 73.7395 73.5808 74.1611 74.9665 74.1368C85.0931 73.9394 94.4924 73.883 100.591 83.1883C109.039 96.1028 100.675 107.748 87.6667 113.021C86.4172 113.529 85.8111 114.46 85.8484 115.813L85.9323 120.804C85.9509 121.819 85.4661 122.327 84.4777 122.327L75.8896 122.411C75.6278 122.415 75.3679 122.365 75.1252 122.265C74.8826 122.164 74.6622 122.015 74.477 121.825C74.2918 121.636 74.1456 121.411 74.0471 121.163C73.9486 120.914 73.8998 120.649 73.9035 120.381L74.0154 114.657C74.0341 113.491 73.4839 112.777 72.365 112.514C63.2828 110.408 57.8372 104.656 56.0282 95.2569C55.9873 95.0585 55.9909 94.8535 56.039 94.6563C56.0872 94.4592 56.1786 94.2747 56.3067 94.116C56.4348 93.9572 56.5966 93.8281 56.7805 93.7378C56.9644 93.6474 57.1659 93.5981 57.3709 93.5932L65.8191 93.4804C66.8262 93.4616 67.5627 93.9128 68.029 94.8339C69.9871 98.8192 73.0364 100.821 77.1765 100.84C83.135 100.896 91.8069 101.178 91.8348 92.9165C91.8908 83.6112 74.4071 86.9386 68.3367 84.6546C50.2935 77.7743 52.5314 51.8888 72.5887 47.9694C72.9704 47.8963 73.3143 47.6923 73.5599 47.3931C73.8055 47.094 73.9371 46.7189 73.9315 46.3339Z"
                    fill="#FEDB5D"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.00195312 79.3787C0.334289 35.6889 35.6884 0.334716 79.3783 0.00238037L0.00195312 79.3787ZM51.5733 154.802C31.5678 147.196 15.4038 131.794 6.79163 112.308L112.308 6.79206C131.794 15.4043 147.195 31.5683 154.802 51.5737L51.5733 154.802ZM159.891 84.214C157.772 125.042 125.042 157.772 84.2136 159.891L159.891 84.214Z"
                  fill="white"
                  fillOpacity="0.15"
                />
                <defs>
                  <filter
                    id="filter0_i_3484_8778"
                    x="12"
                    y="13"
                    width="135"
                    height="135"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3484_8778" />
                  </filter>
                  <filter
                    id="filter1_d_3484_8778"
                    x="54"
                    y="37.8182"
                    width="50"
                    height="86.5933"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3484_8778" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3484_8778" result="shape" />
                  </filter>
                </defs>
              </svg>
            )}

            {showResult && result === "tails" && (
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="80" fill="#FDDB5F" />
                <g filter="url(#filter0_i_3484_8794)">
                  <circle cx="79.5" cy="80.5" r="67.5" fill="#FCB003" />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 79.3763C0.332336 35.6865 35.6865 0.332336 79.3763 0L0 79.3763ZM51.5713 154.8C31.5659 147.193 15.4019 131.792 6.78968 112.306L112.306 6.78968C131.792 15.4019 147.193 31.5659 154.8 51.5714L51.5713 154.8ZM159.889 84.2116C157.77 125.04 125.04 157.77 84.2116 159.889L159.889 84.2116Z"
                  fill="white"
                  fillOpacity="0.15"
                />
                <g filter="url(#filter1_d_3484_8794)">
                  <rect x="72" y="44" width="16" height="72" rx="2" fill="#FEDB5D" />
                </g>
                <defs>
                  <filter
                    id="filter0_i_3484_8794"
                    x="12"
                    y="13"
                    width="135"
                    height="135"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3484_8794" />
                  </filter>
                  <filter
                    id="filter1_d_3484_8794"
                    x="70"
                    y="44"
                    width="18"
                    height="74"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.898039 0 0 0 0 0.580392 0 0 0 0 0.117647 0 0 0 0.5 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3484_8794" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3484_8794" result="shape" />
                  </filter>
                </defs>
              </svg>
            )}
          </div>

          <svg
            width="100"
            height="8"
            viewBox="0 0 100 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            <ellipse cx="50" cy="4" rx="50" ry="4" fill="#35383F" />
          </svg>

          {showResult && <div className="text-2xl md:text-3xl font-semibold text-white capitalize">{result}</div>}

          <Button
            onClick={flipCoin}
            disabled={isFlipping}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFlipping ? "FLIPPING..." : "RANDOM"}
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(1800deg); }
        }
      `}</style>
    </div>
  )
}
