
const BottomPanel = () => {
  return (
    <div className="bg-[#131722] border border-[#2a2e39] rounded-lg p-2 w-full h-full flex flex-col">
      <div className="flex gap-6 mb-4 border-b border-[#2a2e39] pb-2 flex-shrink-0">
        <button className="text-blue-400 border-b-2 border-blue-400 pb-1">Open Positions</button>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">Pending Orders</button>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">History</button>
      </div>
      <div className="overflow-auto flex-1 min-h-0">
        <table className="w-full text-left text-xs text-gray-400 min-w-max">
          <thead className="sticky top-0 bg-[#131722] z-10">
            <tr className="border-b border-[#2a2e39]">
              <th className="py-2 px-2">Symbol</th>
              <th className="py-2 px-2">Type</th>
              <th className="py-2 px-2">Size</th>
              <th className="py-2 px-2">Open Price</th>
              <th className="py-2 px-2">Market Price</th>
              <th className="py-2 px-2">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#2a2e39]/50 hover:bg-[#2a2e39]/30">
              <td className="py-2 px-2">BTCUSD</td>
              <td className="py-2 px-2 text-emerald-500">Buy</td>
              <td className="py-2 px-2">0.5</td>
              <td className="py-2 px-2">42000.00</td>
              <td className="py-2 px-2">42500.00</td>
              <td className="py-2 px-2 text-emerald-500">+$250.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BottomPanel
