export default function AddEvent() {
    return (<form className="flex flex-col gap-5">
        <input className="border border-slate-500 px-8 py-2"   type="text" placeholder="Event Title"/>
        <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Event Desc"/>
        <input className="border border-slate-500 px-8 py-2"  type="text" placeholder="Event Date"/>

        <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Add Event</button>
    </form>
    );


}