import chapters from "./lecture.json";

export type Chapter = {
  id: string;
  title: string;
  sections: Section[];
}

export type Section = {
  id: string;
  title: string;
  code: string;
  note: string;
}

class LectureService {
  private chapters: Chapter[] = chapters;

  findChapterOf(section: Section): Chapter {
    const chapterId = section.id.split('.')[0];
    return this.chapters.find(c => c.id === chapterId)!;
  }

  toPath(section: Section): string {
    const chapter = this.findChapterOf(section);
    const chapterPath = chapter.title.replaceAll(' ', '-');
    const sectionPath = section.title.replaceAll(' ', '-');

    return `/${chapterPath}/${sectionPath}`;
  }

  fromPath(chapterPath: string, sectionPath: string): Section {
    const chapterTitle = chapterPath?.replaceAll('-', ' ');
    const sectionTitle = sectionPath?.replaceAll('-', ' ');

    return this.fromTitle(chapterTitle, sectionTitle);
  }

  fromTitle(chapterTitle: string, sectionTitle: string): Section {
    const chapter = this.chapters
      .find(c => c.title === chapterTitle) || this.chapters[0];
    return chapter.sections
      .find(s => s.title === sectionTitle) || chapter.sections[0];
  }

  firstSection(): Section {
    return this.chapters[0].sections[0];
  }

  lastSection(): Section {
    const lastChapter = this.chapters[this.chapters.length - 1];
    return lastChapter.sections[lastChapter.sections.length - 1];
  }

  nextSection(section: Section): Section {
    const id = section.id;
    let next = false;
    for (const chapter of this.chapters) {
      for (const section of chapter.sections) {
        if (next) return section;
        if (section.id === id) next = true;
      }
    }
    return this.chapters[0].sections[0];
  }

  prevSection(section: Section): Section {
    const id = section.id;
    let prev = false;
    for (const chapter of this.chapters.slice().reverse()) {
      for (const section of chapter.sections.slice().reverse()) {
        if (prev) return section;
        if (section.id === id) prev = true;
      }
    }
    return this.lastSection();
  }

  getChapters(): Chapter[] {
    return this.chapters;
  }
}

export const lectureService = new LectureService();
