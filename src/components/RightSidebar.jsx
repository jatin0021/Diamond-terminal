
const RightSidebar = () => {
  return (
    <div className="bg-[#131722] border border-[#2a2e39] rounded-lg p-2 h-full w-full overflow-y-auto flex flex-col">
      <div className="text-gray-200 font-semibold mb-4 pb-2 border-b border-[#2a2e39]">
        Market Watch
      </div>
      <div className="space-y-2">
        {['EURUSD', 'GBPUSD', 'USDJPY', 'BTCUSD', 'ETHUSD'].map((symbol) => (
          <div key={symbol} className="flex justify-between items-center p-2 hover:bg-[#2a2e39] rounded cursor-pointer transition-colors">
            <span className="text-gray-300">{symbol}</span>
            <div className="flex flex-col items-end">
              <span className="text-emerald-500">1.2345</span>
              <span className="text-xs text-emerald-500/70">+0.05%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSidebar
