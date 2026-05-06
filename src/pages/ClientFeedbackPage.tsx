import { useState } from "react";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import logoSvg from "@/assets/logo.svg";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const labelClass =
  "block text-[10px] font-bold tracking-[0.22em] uppercase text-[#1F217D] mb-2";
const inputClass =
  "w-full rounded-lg px-[18px] py-[13px] text-[15px] text-foreground font-sans outline-none transition-all duration-200 bg-white border border-border placeholder:text-muted-foreground/60 focus:border-[#0199F8] focus:ring-2 focus:ring-[#0199F8]/20";
const sectionTitleClass = "text-[20px] font-bold text-[#1F217D] mb-1.5";
const sectionDescClass =
  "text-[13px] text-muted-foreground mb-6 leading-[1.6]";

type Stars = 0 | 1 | 2 | 3 | 4 | 5;

const StarRating = ({
  value,
  onChange,
}: {
  value: Stars;
  onChange: (n: Stars) => void;
}) => (
  <div className="flex items-center gap-2">
    {[1, 2, 3, 4, 5].map((n) => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n as Stars)}
        className="transition-transform hover:scale-110 cursor-pointer"
        aria-label={`${n} star${n > 1 ? "s" : ""}`}
      >
        <Star
          className={`w-7 h-7 transition-colors ${
            n <= value
              ? "fill-[#0199F8] text-[#0199F8]"
              : "text-muted-foreground/40"
          }`}
        />
      </button>
    ))}
  </div>
);

const ChipGroup = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-wrap gap-2.5">
    {options.map((opt) => {
      const active = value === opt;
      return (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`text-[13px] font-semibold tracking-[0.04em] py-2.5 px-5 rounded-full border transition-all ${
            active
              ? "bg-[#1F217D] text-white border-[#1F217D]"
              : "bg-white text-foreground border-border hover:border-[#0199F8] hover:text-[#0199F8]"
          }`}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

const ClientFeedbackPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const [overallRating, setOverallRating] = useState<Stars>(0);
  const [communicationRating, setCommunicationRating] = useState<Stars>(0);
  const [deliveredOnTime, setDeliveredOnTime] = useState("");

  const [didWell, setDidWell] = useState("");
  const [improve, setImprove] = useState("");

  const [testimonial, setTestimonial] = useState("");
  const [testimonialConsent, setTestimonialConsent] = useState("");

  const [workAgain, setWorkAgain] = useState("");
  const [refer, setRefer] = useState("");

  const [futureOpen, setFutureOpen] = useState("");
  const [futureServicesOther, setFutureServicesOther] = useState("");
  const [timeline, setTimeline] = useState("");

  const [extra, setExtra] = useState("");

  const handleSubmit = async () => {
    if (submitting) return;
    if (!name.trim() || !jobTitle.trim() || !company.trim()) {
      toast({
        title: "Please fill in your details",
        description: "Name, job title, and company are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: {
          form_type: "feedback",
          data: {
            name,
            jobTitle,
            company,
            overallRating,
            communicationRating,
            deliveredOnTime,
            didWell,
            improve,
            testimonial,
            testimonialConsent,
            workAgain,
            refer,
            futureOpen,
            futureServicesOther,
            timeline,
            extra,
          },
        },
      });
      if (error) throw error;
      if (data && (data as { error?: string }).error)
        throw new Error((data as { error: string }).error);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Feedback submit error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>Client Feedback | Recruitment Intermotion</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="relative z-[1]">
        <header className="flex items-center justify-center pt-12 pb-6 px-6">
          <a href="/" aria-label="Recruitment Intermotion" className="inline-flex">
            <img
              src={logoSvg}
              alt="Recruitment Intermotion"
              className="block h-16 md:h-20 w-auto"
            />
          </a>
        </header>

        <main className="px-5 md:px-8 pb-24">
          <div className="max-w-[760px] mx-auto">
            {!submitted ? (
              <>
                <div className="text-center mb-10 md:mb-14">
                  <h1 className="text-[clamp(36px,6vw,64px)] font-bold leading-[0.95] tracking-[-0.03em] text-[#1F217D]">
                    Client <span className="text-[#0199F8]">Feedback</span>
                  </h1>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground leading-[1.7] mt-5 max-w-[520px] mx-auto">
                    Your honest feedback helps us get sharper. It only takes a couple of minutes — thank you for sharing.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-12 shadow-sm">
                  <section>
                    <h2 className={sectionTitleClass}>1. Your Details</h2>
                    <p className={sectionDescClass}>So we know who this lovely feedback is from.</p>
                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>Name <span className="text-[#0199F8]">*</span></label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={inputClass} maxLength={100} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Job Title / Designation <span className="text-[#0199F8]">*</span></label>
                          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Head of Recruiting" className={inputClass} maxLength={120} />
                        </div>
                        <div>
                          <label className={labelClass}>Company Name <span className="text-[#0199F8]">*</span></label>
                          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company" className={inputClass} maxLength={120} />
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>2. Project Satisfaction</h2>
                    <p className={sectionDescClass}>Quick read on how the project went overall.</p>
                    <div className="space-y-7">
                      <div>
                        <label className={labelClass}>Overall Satisfaction</label>
                        <StarRating value={overallRating} onChange={setOverallRating} />
                      </div>
                      <div>
                        <label className={labelClass}>Communication Quality</label>
                        <StarRating value={communicationRating} onChange={setCommunicationRating} />
                      </div>
                      <div>
                        <label className={labelClass}>Did we deliver on time and as promised?</label>
                        <ChipGroup options={["Yes", "Mostly", "No"]} value={deliveredOnTime} onChange={setDeliveredOnTime} />
                      </div>
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>3. Open Feedback</h2>
                    <p className={sectionDescClass}>The good and the could-be-better — both are gold.</p>
                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>What did we do well?</label>
                        <textarea value={didWell} onChange={(e) => setDidWell(e.target.value)} placeholder="The wins, the moments that worked..." className={`${inputClass} resize-none h-[110px]`} maxLength={1000} />
                      </div>
                      <div>
                        <label className={labelClass}>What could we improve?</label>
                        <textarea value={improve} onChange={(e) => setImprove(e.target.value)} placeholder="Honest is helpful — don't hold back." className={`${inputClass} resize-none h-[110px]`} maxLength={1000} />
                      </div>
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>4. Testimonial</h2>
                    <p className={sectionDescClass}>If you'd describe us to a friend — what would you say?</p>
                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>In your own words, how would you describe working with us?</label>
                        <textarea value={testimonial} onChange={(e) => setTestimonial(e.target.value)} placeholder="A few sentences is perfect..." className={`${inputClass} resize-none h-[150px]`} maxLength={1500} />
                      </div>
                      <div>
                        <label className={labelClass}>May we use this as a testimonial?</label>
                        <ChipGroup options={["Yes", "Yes, anonymously", "No"]} value={testimonialConsent} onChange={setTestimonialConsent} />
                        {testimonialConsent === "Yes" && (name || jobTitle || company) && (
                          <p className="text-[12px] text-muted-foreground mt-3 leading-[1.6]">
                            We'll attribute it to{" "}
                            <span className="text-foreground font-medium">
                              {[name, jobTitle, company].filter(Boolean).join(" · ")}
                            </span>.
                          </p>
                        )}
                      </div>
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>5. Likelihood to Recommend</h2>
                    <p className={sectionDescClass}>Two quick yes/maybe/no questions.</p>
                    <div className="space-y-7">
                      <div>
                        <label className={labelClass}>Would you work with us again?</label>
                        <ChipGroup options={["Definitely", "Probably", "No"]} value={workAgain} onChange={setWorkAgain} />
                      </div>
                      <div>
                        <label className={labelClass}>Would you refer us?</label>
                        <ChipGroup options={["Yes", "Maybe", "No"]} value={refer} onChange={setRefer} />
                      </div>
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>6. Future Collaboration</h2>
                    <p className={sectionDescClass}>Curious where things could go from here.</p>
                    <div className="space-y-7">
                      <div>
                        <label className={labelClass}>Would you be open to working with us again in the future?</label>
                        <ChipGroup options={["Yes", "Maybe", "Not right now"]} value={futureOpen} onChange={setFutureOpen} />
                      </div>
                      {(futureOpen === "Yes" || futureOpen === "Maybe") && (
                        <>
                          <div>
                            <label className={labelClass}>If yes, what type of work might you need help with?</label>
                            <p className="text-[12px] text-muted-foreground mb-2.5">e.g. GTM, lead outreach, automation project, custom app creation, etc.</p>
                            <textarea value={futureServicesOther} onChange={(e) => setFutureServicesOther(e.target.value)} placeholder="Tell us a bit about what you have in mind..." className={`${inputClass} resize-none h-[120px]`} maxLength={1500} />
                          </div>
                          <div>
                            <label className={labelClass}>What would the rough timeline look like?</label>
                            <ChipGroup options={["Within 1 month", "1–3 months", "3–6 months", "Not sure yet"]} value={timeline} onChange={setTimeline} />
                          </div>
                        </>
                      )}
                    </div>
                  </section>

                  <div className="border-t border-border" />

                  <section>
                    <h2 className={sectionTitleClass}>7. Anything else?</h2>
                    <p className={sectionDescClass}>Optional — but if there's something on your mind, drop it here.</p>
                    <textarea value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="Anything you'd like to share..." className={`${inputClass} resize-none h-[120px]`} maxLength={1500} />
                  </section>

                  <div className="flex flex-col items-center pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="gradient-brand text-white border-none px-[52px] py-3.5 text-[13px] font-bold tracking-[0.1em] uppercase cursor-pointer font-sans rounded-full inline-flex items-center gap-2 transition-all hover:shadow-[0_4px_20px_rgba(31,33,125,0.35)] hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Submit Feedback"} <span className="text-lg leading-none">→</span>
                    </button>
                    <p className="text-[11px] text-muted-foreground mt-3.5 leading-[1.6] text-center max-w-[360px]">
                      Your responses go straight to our team. Thank you for taking the time.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-10 md:p-16 text-center shadow-sm">
                <div className="text-[48px] mb-5 text-[#0199F8]">✦</div>
                <h1 className="text-[clamp(32px,5vw,52px)] font-bold leading-[1] tracking-[-0.03em] text-[#1F217D] mb-5">
                  Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
                </h1>
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.7] max-w-[520px] mx-auto">
                  Honest feedback is a real gift — and yours just landed with our team. We read every word, and the thoughtful bits stick with us long after the inbox closes.
                </p>
                <p className="text-[15px] text-muted-foreground leading-[1.7] max-w-[520px] mx-auto mt-5">
                  {company
                    ? `It's been a pleasure working with the ${company} team. `
                    : "It's been a pleasure working with you. "}
                  Whenever you're ready for the next chapter — big or small — you know where to find us.
                </p>
                <div className="mt-10">
                  <a
                    href="/"
                    className="gradient-brand text-white text-[13px] font-bold tracking-[0.08em] uppercase py-3.5 px-8 rounded-full no-underline inline-flex items-center gap-2 transition-all hover:opacity-90"
                  >
                    Back to Home <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientFeedbackPage;
