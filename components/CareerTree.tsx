"use client";

import { useEffect, useMemo, useState } from "react";
import {
  careerTreeData,
  crossStreamOptions,
  type CareerCategory,
  type CareerDetail,
  type CareerLeaf,
  type LevelOneBranch,
  type StreamBranch,
} from "../data/careerTreeData";

type CareerTreeProps = {
  selectedLevelOneSlug: string;
  selectedStreamSlug?: string;
  onSelectLevelAndStream: (levelOneSlug: string, streamSlug?: string) => void;
};

function formatTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getFallbackDetail(
  item: CareerLeaf,
  categoryTitle: string,
  branchTitle: string
): CareerDetail {
  return {
    slug: item.slug,
    title: item.title,
    whatItIs: `${item.title} is a path under ${categoryTitle} in ${branchTitle}. This section helps students understand what the course or path is about and where it can lead.`,
    eligibility: `Eligibility depends on the stream, institution, and admission path related to ${branchTitle}.`,
    entranceExams: ["Institution-specific admissions", "State-level admissions"],
    topColleges: ["Government Colleges", "State Universities", "Recognized Private Institutions"],
    careerOptions: [
      `${item.title} related roles`,
      "Higher study opportunities",
      "Industry-specific job paths",
    ],
    salaryDirection:
      "Salary can vary based on course type, location, institution, specialization, and experience growth over time.",
    higherStudies: ["Postgraduate programs", "Professional certifications", "Specializations"],
    applyLinks: [{ label: "Admissions Info", url: "#" }],
  };
}

export default function CareerTree({
  selectedLevelOneSlug,
  selectedStreamSlug,
  onSelectLevelAndStream,
}: CareerTreeProps) {
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("");
  const [selectedItemSlug, setSelectedItemSlug] = useState("");

  const selectedLevelOne = useMemo<LevelOneBranch | undefined>(() => {
    return careerTreeData.find((branch) => branch.slug === selectedLevelOneSlug);
  }, [selectedLevelOneSlug]);

  const selectedStreams = selectedLevelOne?.streams ?? [];

  const selectedCategories: CareerCategory[] = useMemo(() => {
    if (!selectedLevelOne) return [];

    if (selectedLevelOne.slug === "intermediate") {
      const stream = selectedLevelOne.streams?.find(
        (item) => item.slug === selectedStreamSlug
      );
      return stream?.categories ?? [];
    }

    return selectedLevelOne.categories ?? [];
  }, [selectedLevelOne, selectedStreamSlug]);

  const selectedCategory = useMemo(() => {
    if (!selectedCategories.length) return undefined;

    return (
      selectedCategories.find((category) => category.title === selectedCategoryTitle) ??
      selectedCategories[0]
    );
  }, [selectedCategories, selectedCategoryTitle]);

  const selectedItem = useMemo(() => {
    if (!selectedCategory?.items?.length) return undefined;

    return (
      selectedCategory.items.find((item) => item.slug === selectedItemSlug) ??
      selectedCategory.items[0]
    );
  }, [selectedCategory, selectedItemSlug]);

  const selectedDetail = useMemo<CareerDetail | undefined>(() => {
    if (!selectedItem || !selectedCategory || !selectedLevelOne) return undefined;

    if (selectedItem.detail) return selectedItem.detail;

    const branchTitle =
      selectedLevelOne.slug === "intermediate"
        ? selectedStreams.find((stream) => stream.slug === selectedStreamSlug)?.title ??
          selectedLevelOne.title
        : selectedLevelOne.title;

    return getFallbackDetail(selectedItem, selectedCategory.title, branchTitle);
  }, [selectedItem, selectedCategory, selectedLevelOne, selectedStreams, selectedStreamSlug]);

  useEffect(() => {
    if (!selectedCategories.length) {
      setSelectedCategoryTitle("");
      setSelectedItemSlug("");
      return;
    }

    const firstCategory = selectedCategories[0];
    const currentCategoryExists = selectedCategories.some(
      (category) => category.title === selectedCategoryTitle
    );

    const activeCategory = currentCategoryExists
      ? selectedCategories.find((category) => category.title === selectedCategoryTitle) ??
        firstCategory
      : firstCategory;

    if (!currentCategoryExists) {
      setSelectedCategoryTitle(firstCategory.title);
    }

    if (!activeCategory?.items?.length) {
      setSelectedItemSlug("");
      return;
    }

    const currentItemExists = activeCategory.items.some(
      (item) => item.slug === selectedItemSlug
    );

    if (!currentItemExists) {
      setSelectedItemSlug(activeCategory.items[0].slug);
    }
  }, [selectedCategories, selectedCategoryTitle, selectedItemSlug]);

  const handleLevelOneClick = (branch: LevelOneBranch) => {
    if (branch.slug === "intermediate") {
      const firstStream = branch.streams?.[0];
      onSelectLevelAndStream("intermediate", firstStream?.slug ?? "mpc");
      return;
    }

    onSelectLevelAndStream(branch.slug);
  };

  const handleStreamClick = (stream: StreamBranch) => {
    onSelectLevelAndStream("intermediate", stream.slug);
  };

  const detailTitle =
    selectedDetail?.title ??
    selectedItem?.title ??
    selectedCategory?.title ??
    selectedLevelOne?.title ??
    "Career Path";

  return (
    <section id="career-tree" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Interactive career tree
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Explore complete branches from 10th to careers.
          </h2>
          <p className="mt-4 text-slate-300">
            Select a level, choose a stream or category, and then open a course or
            path to view what it is, eligibility, exams, colleges, career options,
            salary direction, higher studies, and apply links.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm">
              10th Class
            </div>

            <div className="my-6 mx-auto h-8 w-0.5 bg-white/20" />

            <div className="grid gap-4 md:grid-cols-3">
              {careerTreeData.map((branch) => {
                const active = selectedLevelOneSlug === branch.slug;

                return (
                  <button
                    key={branch.slug}
                    onClick={() => handleLevelOneClick(branch)}
                    className={`rounded-2xl px-4 py-4 text-left text-sm font-medium transition duration-200 ${
                      active
                        ? "bg-white text-slate-950 shadow-md"
                        : "border border-white/10 bg-white/10 text-white hover:bg-white/15"
                    }`}
                  >
                    <p className="font-semibold">{branch.title}</p>
                    <p
                      className={`mt-2 text-xs leading-5 ${
                        active ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {branch.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {selectedLevelOne?.slug === "intermediate" && selectedStreams.length > 0 && (
              <>
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Intermediate Streams
                  </p>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {selectedStreams.map((stream) => {
                    const active = selectedStreamSlug === stream.slug;

                    return (
                      <button
                        key={stream.slug}
                        onClick={() => handleStreamClick(stream)}
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                          active
                            ? "bg-white text-slate-950 shadow-md"
                            : "border border-white/10 bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        {stream.title}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {selectedCategories.length > 0 && (
              <>
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Categories
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {selectedCategories.map((category) => {
                    const active = selectedCategory?.title === category.title;

                    return (
                      <button
                        key={category.title}
                        onClick={() => setSelectedCategoryTitle(category.title)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                          active
                            ? "bg-blue-100 text-blue-950"
                            : "border border-white/10 bg-white/10 text-white hover:bg-white/15"
                        }`}
                      >
                        {category.title}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {selectedCategory?.items?.length ? (
              <>
                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Courses / Paths
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {selectedCategory.items.map((item) => {
                    const active = selectedItem?.slug === item.slug;

                    return (
                      <button
                        key={item.slug}
                        onClick={() => setSelectedItemSlug(item.slug)}
                        className={`rounded-2xl px-4 py-4 text-left transition duration-200 ${
                          active
                            ? "bg-white text-slate-950 shadow-md"
                            : "border border-white/10 bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p
                          className={`mt-2 text-xs ${
                            active ? "text-slate-600" : "text-slate-300"
                          }`}
                        >
                          Click to view full details
                        </p>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : null}

            <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Cross-stream options
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {crossStreamOptions.map((section) => (
                  <div
                    key={section.slug}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{section.title}</p>
                    <p className="mt-2 text-xs leading-6 text-slate-300">
                      {section.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Final output
            </p>

            <h3 className="mt-3 text-2xl font-bold">{detailTitle}</h3>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-white">📘 What it is</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.whatItIs ??
                    "Select a branch, category, and course to see detailed information here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">🎯 Eligibility</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.eligibility ?? "Eligibility details will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">🧪 Entrance Exams</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.entranceExams?.length
                    ? selectedDetail.entranceExams.join(", ")
                    : "Relevant exams will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">🏫 Top Colleges</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.topColleges?.length
                    ? selectedDetail.topColleges.join(", ")
                    : "College suggestions will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">💼 Career Options</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.careerOptions?.length
                    ? selectedDetail.careerOptions.join(", ")
                    : "Career options will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">📈 Salary Direction</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.salaryDirection ??
                    "Salary direction and growth expectations will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">🎓 Higher Studies</p>
                <p className="mt-2 leading-7 text-slate-300">
                  {selectedDetail?.higherStudies?.length
                    ? selectedDetail.higherStudies.join(", ")
                    : "Higher study options will appear here."}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">🔗 Apply Links</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {selectedDetail?.applyLinks?.length ? (
                    selectedDetail.applyLinks.map((link) => (
                      <a
                        key={`${selectedDetail.slug}-${link.label}`}
                        href={link.url}
                        className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-white/10"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="text-slate-300">Apply links will appear here.</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Current selection
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {selectedLevelOne?.title ?? "Level 1"}
                {selectedLevelOne?.slug === "intermediate" && selectedStreamSlug
                  ? ` → ${
                      selectedStreams.find((stream) => stream.slug === selectedStreamSlug)
                        ?.title ?? formatTitleFromSlug(selectedStreamSlug)
                    }`
                  : ""}
                {selectedCategory ? ` → ${selectedCategory.title}` : ""}
                {selectedItem ? ` → ${selectedItem.title}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}