import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    backgroundColor: 'white',
  },
  bellContainer: { borderRadius: 5, padding: 10, backgroundColor: '#fcc1c3' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  dogImage: {
    position: 'absolute',
    right: '35%',
    bottom: -10,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    zIndex: 1,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 16.5,
  },
  subText: {
    fontSize: 16,
    color: '#7D7D7D',
    marginLeft: 16.5,
    color: 'black',
    marginBottom: 30,
  },
  searchBox: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    // marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  banner: {
    margin: 20,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 15,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  discountText: {
    fontSize: 14,
    marginTop: 10,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
  },
  serviceBox: {
    width: '45%',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    margin: 20,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  ratingContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingBox: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  ratingStars: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  bannerImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    resizeMode: 'cover',
    position: 'absolute'
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  bannerItem: {
    height: 200,  // Adjust as per your carousel's height
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',  // Important for absolute positioning inside
    overflow: 'hidden',  // Ensures no overflow if content exceeds bounds
  },
  absoluteImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bannerTitle: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  bannerDiscount: {
    fontSize: 18,
    color: 'black',
    // marginTop: 5,
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',  // Optional shadow
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 4,
  },
  carouselItem: {
    height: 150,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
  },
  activeDot: {
    backgroundColor: '#ff6694',
  },
  inactive: {
    backgroundColor: '#ffd7e5'
  },
  discountContainer: {
    position: 'absolute',
    bottom: 35,  // Adjust based on your needs
    left: 30,
    alignItems: 'flex-start',  // Align discount text to the left
    justifyContent: 'center',
  },
  serviceGrid1: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    height: 200,
    maxWidth: '50%',
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
  },
  bellCotainer: {
    // backgroundColor: '#fcc0c3',
    padding: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardWrapper: {
    width: '48%',
    marginVertical: 5,
  },
  card1: {
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    paddingBottom: 40
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  cardSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardLabel: {
    color: 'gray',
  },
  iconContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 10,
  },
  nextIcon: {
    borderRadius: 20,
    padding: 2,
  },
  mainContainer: { backgroundColor: '#f8f2fa', margin: 10, borderRadius: 10, padding: 15, elevation: 3 },
  title: { fontWeight: 'bold', fontSize: 18, color: '#000', marginLeft: 5 },
  statusContainer: { flexDirection: 'row', justifyContent: 'space-around', height: 100 },
  status: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  square: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  label: {
    color: '#000',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 14,
  },
});

export default globalStyles;
