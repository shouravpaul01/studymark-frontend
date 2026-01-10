import HeaderTitle from "@/components/shared/HeaderTitle";
import AddNewNoteForm from "@/components/smart-notes/AddNewNoteForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Database, Globe, Lightbulb, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { notesData } from "@/constants";
import NoteCard from "@/components/smart-notes/NoteCard";

export default function page() {
  return (
    <div className="container space-y-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <HeaderTitle
          title="Smart Notes Hub"
          description="Browse preloaded intelligent notes, add your own private or public notes,
and search 
instantly for exactly what you need."
          descriptionClassName="max-w-full!"
          className="-space-y-3 md:col-span-2"
        />
        <Alert
          variant="default"
          className="bg-primary/5 border border-primary/20"
        >
          <Lightbulb className="text-primary! " />
          <AlertTitle className="ms-1">Intelligent Notes</AlertTitle>
          <AlertDescription className="ms-1">
            Preloaded by subject — ready to browse or use as templates.
          </AlertDescription>
        </Alert>
      </div>
      <Alert
        variant="default"
        className="flex bg-primary/5 border border-primary/20"
      >
        <p className="text-primary font-medium">Tip:</p>

        <AlertDescription className="ms-1 flex flex-wrap">
          Try typing a subject name (e.g.,{" "}
          <span className="text-primary">Mathematics</span> ) or any keyword —
          subject matches are prioritized.
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <AddNewNoteForm />
        <div className="md:col-span-3">
          <div className="space-y-5">
            {/* Search and Filter Card */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes by subject or keyword..."
                  className="pl-10  text-base"
                />
              </div>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                </SelectContent>
              </Select>
              <Button variant={"destructive"}>Clear My Notes</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {notesData?.map((note) => (
                <NoteCard key={note.id} data={note} />
              ))}
            </div>
            <div className="flex flex-col md:flex-row border-t pt-4 gap-5">
              <div className="flex-1">
                <div className="flex gap-5">
                  <div className="flex gap-1 items-center text-sm text-neutral-500">
                    <Globe className="size-4 text-primary" /> Public Notes:{" "}
                    <span className="font-bold text-black">6</span>
                  </div>
                  <div className="bg-neutral-400 w-[1px]" />

                  <div className="flex gap-1 items-center text-sm text-neutral-500">
                    <User className="size-4 text-primary" /> Your Notes:{" "}
                    <span className="font-bold text-black">0</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 items-center text-sm text-neutral-500">
                <Database className="size-4 text-neutral-800" /> Public Notes:{" "}
                All notes persist locally in your browser
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
