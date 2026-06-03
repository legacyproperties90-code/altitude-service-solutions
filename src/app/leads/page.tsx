"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Phone, Mail, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Lead = {
  id: string; created_at: string; name: string; email: string;
  phone: string; service: string; address: string; message: string; status: string;
};

const PIN = "altitude2024";

export default function LeadsPage() {
  const [auth, setAuth]       = useState(false);
  const [pin, setPin]         = useState("");
  const [leads, setLeads]     = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const login = () => {
    if (pin === PIN) { setAuth(true); load(); }
    else setError("Incorrect PIN");
  };

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("quote_requests").select("*").order("created_at", { ascending: false });
    setLeads(data ?? []);
    setLoading(false);
  };

  useEffect(() => { if (auth) load(); }, [auth]);

  if (!auth) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm border border-gray-100">
        <h1 className="text-2xl font-black text-gray-900 mb-2 text-center">Leads Panel</h1>
        <p className="text-gray-500 text-sm text-center mb-6">Altitude Service Solutions</p>
        <input type="password" placeholder="Enter PIN" value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 mb-3 text-gray-900 focus:outline-none focus:border-blue-500" />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button onClick={login}
          className="w-full py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors">
          Enter
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Quote Requests</h1>
            <p className="text-gray-500 text-sm">{leads.length} total leads</p>
          </div>
          <button onClick={load} className="px-5 py-2.5 bg-blue-700 text-white rounded-xl font-semibold text-sm hover:bg-blue-800 transition-colors">
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="text-center text-gray-400 py-20">No leads yet</div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-black text-gray-900 text-lg">{lead.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${lead.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {lead.status}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 mb-3">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                        <Mail size={14} /> {lead.email}
                      </a>
                      {lead.phone && (
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-green-600 hover:text-green-800 text-sm">
                          <Phone size={14} /> {lead.phone}
                        </a>
                      )}
                      {lead.address && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin size={14} /> {lead.address}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Clock size={12} /> {new Date(lead.created_at).toLocaleDateString("en-US", { month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit" })}
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl px-3 py-2 inline-flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      <span className="text-blue-700 font-semibold text-sm">{lead.service}</span>
                    </div>
                    {lead.message && (
                      <p className="text-gray-600 text-sm mt-3 bg-gray-50 rounded-xl px-3 py-2">{lead.message}</p>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a href={`mailto:${lead.email}?subject=Your Quote Request — Altitude Service Solutions`}
                      className="px-4 py-2 bg-blue-700 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors">
                      Reply
                    </a>
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`}
                        className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors">
                        Call
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
