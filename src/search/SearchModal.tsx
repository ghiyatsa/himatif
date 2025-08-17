'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { searchPosts } from './actions'
import type { Post } from '@/payload-types'
import { useDebounce } from '@/utilities/useDebounce'
import { Loader2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { CMSLink } from '@/components/Link'
import { motion } from 'motion/react'

export const SearchModal = () => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    const doSearch = async () => {
      setIsLoading(true)
      const searchResults = await searchPosts(debouncedValue)
      setResults(searchResults)
      setIsLoading(false)
    }
    doSearch()
  }, [debouncedValue])

  return (
    <Dialog>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <DialogTrigger asChild>
          <Button
            className="lg:mx-2 lg:h-8 lg:px-3 lg:w-max h-8 w-8 mr-1 border border-border"
            variant={'ghost'}
          >
            <SearchIcon />
            <span className="hidden lg:inline-flex">Search...</span>
          </Button>
        </DialogTrigger>
        <DialogContent
          className="xl:min-w-xl top-16 translate-y-0 data-[state=open]:translate-y-0"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div>
            <div className="flex items-center gap-2">
              <SearchIcon className="text-muted-foreground size-5" />
              <Input
                onChange={(event) => {
                  setValue(event.target.value)
                }}
                name="query"
                placeholder="Search..."
                className="rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-base text-base pl-0"
                autoComplete="off"
              />
            </div>
            {value.length > 0 && (
              <div className="overflow-y-auto space-y-4 mt-4">
                <Separator />
                {isLoading && results.length === 0 && (
                  <div className="flex justify-center items-center h-full">
                    <Loader2 className="animate-spin" />
                  </div>
                )}
                {!isLoading && results.length > 0 ? (
                  <div className="flex flex-col">
                    {results.map((post) => (
                      <CMSLink
                        key={post.id}
                        url={post.slug}
                        appearance={'ghost'}
                        className={{ button: 'justify-start' }}
                        size={'search'}
                      >
                        {post.title}
                      </CMSLink>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <p>No results found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
