import { Book } from '@/models'
import { Theme } from '@/themes'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { ColorProps, createBox } from '@shopify/restyle'
import React, { useCallback } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import BookListItem from './book-list-item'
import BOOKS from '@/fixtures/books.ts'

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)
const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
 BottomSheetFlatList
)

type Props = {
  inBottomSheet?: boolean
  onPressItem: (bookId: string) => void
  headerComponent?: React.FC<any>
} & ColorProps<Theme>

const BookList = (
 {
   onPressItem,
   headerComponent,
   color,
   inBottomSheet
 } : Props
) => {
  const renderItem = useCallback(
   ({item}: { item: Book }) => {
     return <BookListItem {...item} onPress={onPressItem} color={color} />
   },
   [onPressItem]
  )

  const ListComponent = inBottomSheet
   ? StyledBottomSheetFlatList
   : StyledFlatList

  return (
   <ListComponent
    contentInsetAdjustmentBehavior="automatic"
    scrollEventThrottle={16}
    data={BOOKS}
    renderItem={renderItem}
    width="100%"
    pt="sm"
    keyExtractor={item => item.id}
    ListHeaderComponent={headerComponent}
   />
  )
}

export default BookList
