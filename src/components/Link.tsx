export default function Link({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="bg-blue w-fit rounded-[0.375rem] flex justify-center items-center py-[0.625rem] px-[1.875rem] text-[rgba(255,255,255,0.9)] text-[1.1875rem] hover:outline   hover:bg-[#001940] transition-all duration-300 mx-auto lg:mx-0">
      {text}
    </a>
  );
}
