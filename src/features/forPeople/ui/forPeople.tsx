const data = [
  { text: 'No hand' },
  { text: 'No leg' },
  { text: 'Blind' },
  { text: 'Deaf' },
  { text: 'Mute' },
  { text: 'No finger' },
  { text: 'No xyi' },
  { text: 'Other' },
]

export const ForPeople = () => {
  return (
    <div className="mx-7 mb-[52px] flex items-center gap-[60px]">
      {data.map(({ text }, index) => (
        <div key={index} className="cursor-pointer py-[18px] px-6 rounded-[40px] border-solid border-[1.5px] border-primary">
          <span className="whitespace-nowrap text-[14px] font-medium text-primary">{text}</span>
        </div>
      ))}
    </div>
  )
}